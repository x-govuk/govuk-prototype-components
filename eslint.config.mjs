import xGovukConfig from '@x-govuk/eslint-config'

export default [
  ...xGovukConfig,
  {
    ignores: ['_site', 'x-govuk/all.js']
  }
]
