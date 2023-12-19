const fs = require('node:fs')
const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')
const beautify = require('js-beautify')
const nunjucks = require('nunjucks')
const matter = require('gray-matter')

const getComponentContent = (componentName) => {
  const componentPath = `docs/examples/${componentName}.njk`
  const componentFile = fs.readFileSync(componentPath, 'utf-8')
  const { content } = matter(componentFile)

  return content
}

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    brandColour: '#28a',
    fontFamily: 'system-ui, sans-serif',
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-mask-icon.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-apple-touch-icon.png'
    },
    opengraphImageUrl:
      'https://x-govuk.github.io/govuk-prototype-components/assets/opengraph-image.png',
    homeKey: 'GOV.UK Prototype Components',
    parentSite: {
      url: 'https://x-govuk.github.io/#projects',
      name: 'X-GOVUK projects'
    },
    url: process.env.GITHUB_ACTIONS
      ? 'https://x-govuk.github.io/govuk-prototype-components/'
      : '/',
    stylesheets: ['/styles/application.css'],
    header: {
      organisationLogo: 'x-govuk',
      organisationName: 'X-GOVUK',
      productName: 'Prototype Components',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    footer: {
      contentLicence: {
        html: 'Licensed under the <a class="govuk-footer__link" href="https://github.com/x-govuk/govuk-prototype-components/blob/main/LICENSE.txt">MIT Licence</a>, except where otherwise stated'
      },
      copyright: {
        text: '© X-GOVUK'
      }
    }
  })

  /**
   * Fetch raw Nunjucks code for given `componentName` and return a string.
   *
   * This is needed as Nunjucks `include` tag parses included code, and
   * currently provides no way to fetch it un-rendered.
   * @param {string} componentName - Name of component
   * @returns {string} - Nunjucks template rendered as raw template
   * @see {@link https://github.com/mozilla/nunjucks/issues/788}
   */
  eleventyConfig.addNunjucksGlobal('getNunjucksCode', (componentName) => {
    const content = getComponentContent(componentName)

    // Remove `{% from "..." import ... %}` line as this is not needed by users
    const nunjucksCode = content.replaceAll(/{%\sfrom\s[^\n]+\n/g, '')

    // Use configured Markdown filter to generate syntax highlighted HTML
    const markdown = eleventyConfig.getFilter('markdown')
    return markdown(`\`\`\`js\n${nunjucksCode}\n\`\`\``)
  })

  /**
   * Fetch Nunjucks code for given `componentName` and return an HTML string.
   * @param {string} componentName - Name of component
   * @returns {string} - Nunjucks template rendered as HTML
   */
  eleventyConfig.addNunjucksGlobal('getHtmlCode', (componentName) => {
    const content = getComponentContent(componentName)

    // Create Nunjucks environment to render example as HTML
    const nunjucksEnv = nunjucks.configure([
      './node_modules/govuk-frontend/dist',
      './node_modules/@x-govuk/govuk-prototype-components'
    ])
    const html = nunjucksEnv.renderString(content).trim()

    // Beautify HTML code
    const htmlCode = beautify.html(html, {
      indent_size: 2,
      max_preserve_newlines: 0,
      wrap_attributes: 'preserve'
    })

    // Use configured Markdown filter to generate syntax highlighted HTML
    const markdown = eleventyConfig.getFilter('markdown')
    return markdown(`\`\`\`html\n${htmlCode}\n\`\`\``)
  })

  // Collections
  eleventyConfig.addCollection('homepage', (collection) =>
    collection
      .getFilteredByGlob([
        'docs/autocomplete.md',
        'docs/masthead.md',
        'docs/primary-navigation.md',
        'docs/sub-navigation.md',
        'docs/related-navigation.md',
        'docs/data-attributes.md'
      ])
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')
  eleventyConfig.addPassthroughCopy({
    './node_modules/@x-govuk/govuk-prototype-components/x-govuk/*.js':
      './assets/x-govuk'
  })
  eleventyConfig.addPassthroughCopy({
    './node_modules/iframe-resizer/js/*.js': './assets'
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      layouts: '_layouts',
      includes: '_components'
    },
    pathPrefix: process.env.GITHUB_ACTIONS ? '/govuk-prototype-components' : '/'
  }
}
