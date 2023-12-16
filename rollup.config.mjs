import commonJs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default [
  {
    input: ['x-govuk/all.mjs'],
    output: {
      dir: 'x-govuk',
      format: 'umd',
      name: 'GOVUKPrototypeComponents'
    },
    plugins: [nodeResolve(), commonJs()]
  }
]
