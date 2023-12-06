const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')
const fs = require('fs')
const matter = require('gray-matter')

module.exports = function (eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    brandColour: '#28a',
    fontFamily: 'system-ui, sans-serif',
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-mask-icon.svg?raw=true',
      shortcut: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-favicon.ico',
      touch: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-apple-touch-icon.png'
    },
    opengraphImageUrl: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-opengraph-image.png',
    homeKey: 'GOV.UK Prototype Components',
    parentSite: {
      url: 'https://x-govuk.github.io/#projects',
      name: 'X-GOVUK projects'
    },
    url: process.env.GITHUB_ACTIONS
      ? 'https://x-govuk.github.io/govuk-prototype-components/'
      : '/',
    stylesheets: [
      '/styles/application.css'
    ],
    header: {
      organisationLogo: 'x-govuk',
      organisationName: 'X-GOVUK',
      productName: 'Prototype Components'
    },
    footer: {
      contentLicence: {
        html: 'Licensed under the <a class="govuk-footer__link" href="https://github.com/x-govuk/govuk-prototype-components/blob/main/LICENSE.txt">MIT Licence</a>, except where otherwise stated'
      },
      copyright: {
        text: '© X-GOVUK'
      },
      meta: {
        items: []
      }
    }
  })

  // This function fetches the raw nunjucks code for the given example and returns it.
  // It’s needed as the `{% include "" %}` feature within nunjucks will render the
  // code, and there’s currently no built-in way to fetch it un-rendered.
  //
  // See https://github.com/mozilla/nunjucks/issues/788
  eleventyConfig.addNunjucksGlobal('getNunjucksCode', function (componentName) {
    let nunjucksCode = matter(fs.readFileSync(`examples/${componentName}.njk`, 'utf-8')).content

    // Remove the `{% from "..." import ... %}` lines as those aren’t needed by users.
    nunjucksCode = nunjucksCode.replace(/\{\%\sfrom\s[^\n]+\n\n/, '')

    return nunjucksCode
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy('./assets')

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      layouts: '_layouts'
    },
    pathPrefix: process.env.GITHUB_ACTIONS
      ? '/govuk-prototype-components'
      : '/'
  }
}
