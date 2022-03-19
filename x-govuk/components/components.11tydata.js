const capitalise = (string) => {
  string = string.trim().replace(/^\w/, (c) => c.toUpperCase())
  return string
}

const humanise = (string) => {
  string = string.replace('/README', '').replace('/', '').replace('-', ' ')
  return string
}

module.exports = {
  layout: 'side-navigation',
  tags: ['component'],
  eleventyComputed: {
    slug: data => humanise(data.page.filePathStem),
    title: data => `${capitalise(data.slug)}`,
    permalink: data => `/${data.slug}/`
  },
  eleventyNavigation: {
    parent: 'GOV.UK Prototype Components'
  }
}
