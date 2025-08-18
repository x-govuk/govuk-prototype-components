import { promises as fs } from 'node:fs'
import path from 'node:path'

import commonJs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

/**
 * GOV.UK Prototype Kit processes `@use` and appends a second copy of
 * GOV.UK Frontend to the generate CSS file. To avoid this, we provide a
 * concatenated SCSS file without any explicit importing of GOV.UK Frontend
 *
 * @param {object} [options] - Plugin options
 * @param {Array} [options.inputFiles] - Component SCSS files
 * @param {string} [options.lineToRemove] - SCSS line to remove
 * @param {string} [options.outputFileName] - Name of generated SCSS file
 * @see {@link https://github.com/x-govuk/govuk-prototype-components/issues/285}
 */
function packageScss(options = {}) {
  const {
    inputFiles = [],
    lineToRemove = '',
    outputFileName = 'index.scss'
  } = options

  return {
    name: 'scss-transform-plugin',
    async generateBundle(outputOptions) {
      let outputFile

      if (outputOptions.file) {
        const dir = path.dirname(outputOptions.file)
        outputFile = path.join(dir, outputFileName)
      } else if (outputOptions.dir) {
        outputFile = path.join(outputOptions.dir, outputFileName)
      } else {
        this.error('No output file or directory specified')
      }

      const transformedContents = []

      for (const file of inputFiles) {
        const content = await fs.readFile(file, 'utf-8')
        const lines = content
          .split('\n')
          .filter((line) => line.trim() !== lineToRemove.trim())
        transformedContents.push(lines.join('\n'))
      }

      await fs.mkdir(path.dirname(outputFile), { recursive: true })
      await fs.writeFile(outputFile, transformedContents, 'utf-8')

      this.warn(`SCSS bundle written to ${outputFile}`)
    }
  }
}

export default [
  {
    input: ['src/x-govuk/index.js'],
    output: {
      file: 'dist/govuk-prototype-components.min.js',
      format: 'es',
      sourcemap: true
    },
    plugins: [
      nodeResolve(),
      commonJs(),
      terser({ format: { comments: false } }),
      packageScss({
        inputFiles: [
          'src/x-govuk/components/autocomplete/_index.scss',
          'src/x-govuk/components/masthead/_index.scss',
          'src/x-govuk/components/related-navigation/_index.scss',
          'src/x-govuk/components/secondary-navigation/_index.scss',
          'src/x-govuk/components/sub-navigation/_index.scss'
        ],
        lineToRemove: '@use "node_modules/govuk-frontend/dist/govuk" as *;',
        outputFileName: 'govuk-prototype-components.scss'
      })
    ]
  }
]
