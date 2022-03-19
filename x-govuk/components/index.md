---
templateEngineOverride: njk
homepage: true
layout: product
includeInBreadcrumbs: true
collection: Components
override:tags: false
pagination:
  data: collections.component
  size: 20
eleventyComputed:
  title: GOV.UK Prototype Components
  description: "{{ pkg.description }}"
  permalink: "/"
---
{% filter markdown %}{% include "../../README.md" %}{% endfilter %}
