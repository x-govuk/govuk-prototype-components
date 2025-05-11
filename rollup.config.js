import commonJs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

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
      terser({ format: { comments: false } })
    ]
  }
]
