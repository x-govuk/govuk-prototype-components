import fs from 'node:fs'

import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'
import matter from 'gray-matter'
import beautify from 'js-beautify'
import nunjucks from 'nunjucks'

const getComponentContent = (componentName) => {
  const componentPath = `docs/examples/${componentName}.njk`
  const componentFile = fs.readFileSync(componentPath, 'utf-8')
  const { content } = matter(componentFile)

  return content
}

const serviceName = 'GOV.UK Prototype Components'

export default function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-mask-icon.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-apple-touch-icon.png'
    },
    opengraphImageUrl:
      'https://x-govuk.github.io/govuk-prototype-components/assets/opengraph-image.png',
    themeColor: '#2288aa',
    titleSuffix: serviceName,
    homeKey: serviceName,
    showBreadcrumbs: false,
    headingPermalinks: true,
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/govuk-prototype-components/',
    stylesheets: ['/assets/application.css'],
    header: {
      homepageUrl: 'https://x-govuk.github.io'
    },
    serviceNavigation: {
      serviceName,
      serviceUrl: process.env.GITHUB_ACTIONS
        ? '/govuk-prototype-components/'
        : '/',
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
    },
    rebrand: true
  })

  /**
   * Fetch raw Nunjucks code for given `componentName` and return a string.
   *
   * This is needed as Nunjucks `include` tag parses included code, and
   * currently provides no way to fetch it un-rendered.
   *
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
   *
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
        'docs/secondary-navigation.md',
        'docs/sub-navigation.md',
        'docs/related-navigation.md',
        'docs/data-attributes.md'
      ])
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')
  eleventyConfig.addPassthroughCopy({
    './node_modules/@x-govuk/govuk-prototype-components/dist/*.min.js':
      './assets/'
  })
  eleventyConfig.addPassthroughCopy({
    './node_modules/iframe-resizer/js/*.js': './assets'
  })

  // Enable X-GOVUK brand
  eleventyConfig.addNunjucksGlobal('xGovuk', true)

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      layouts: '_layouts',
      includes: '_components'
    },
    pathPrefix: process.env.GITHUB_ACTIONS && '/govuk-prototype-components'
  }
}
