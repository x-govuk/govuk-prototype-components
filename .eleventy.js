const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function (eleventyConfig) {
  const url = process.env.GITHUB_ACTIONS
    ? 'https://x-govuk.github.io/govuk-prototype-components/'
    : '/'
  const pathPrefix = process.env.GITHUB_ACTIONS
    ? '/govuk-prototype-components'
    : '/'

  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    brandColour: '#28a',
    fontFamily: 'system-ui, sans-serif',
    homeKey: 'GOV.UK Prototype Components',
    parentSite: {
      url: 'https://x-govuk.github.io',
      name: 'X-GOVUK shared projects'
    },
    pathPrefix,
    url,
    header: {
      organisationLogo: 'x-govuk',
      organisationName: 'X-GOVUK',
      productName: 'Prototype Components'
    },
    footer: {
      copyright: '© X-GOVUK',
      licence: 'Licensed under the [MIT Licence](https://github.com/x-govuk/govuk-prototype-components/blob/main/LICENSE.txt), except where otherwise stated'
    }
  })

  // Ignores
  eleventyConfig.ignores.add('**/*/*.js');
  eleventyConfig.ignores.add('**/*/*.scss');
  eleventyConfig.ignores.add('**/*/*.njk');

  // Transforms
  eleventyConfig.addTransform('remove-h1', (content, outputPath) => {
    // Remove first `h1` as it repeats what’s already shown in page title
    content = content.replace(/<h1\s*.*tabindex="-1"\s*.*>\s*.*<\/h1>/, '')
    return content;
  });

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: false,
    dir: {
      input: 'x-govuk/components',
      output: 'public',
      layouts: './../../node_modules/govuk-eleventy-plugin/app/layouts'
    },
    pathPrefix
  }
}
