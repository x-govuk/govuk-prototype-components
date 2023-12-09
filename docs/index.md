---
homepage: true
layout: product
includeInBreadcrumbs: true
title: Use common components that are not yet part of the GOV.UK Design System
description: A collection of experimental components, where more research is needed to validate them.
image:
  src: /assets/homepage-illustration.svg
  alt: Illustration of an interface with checkboxes and radio buttons being generated from code, floating above a laptop.
startButton:
  href: /get-started
---
<div class="govuk-grid-row">
{% for item in collections.homepage %}
  <section class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
    <h2 class="govuk-heading-m govuk-!-font-size-27">{{ item.data.title | smart }}</h2>
    <p class="govuk-body">{{ item.data.description | markdown("inline") }}</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="{{ item.url | url }}">{{ item.data.title | smart}} component</a></p>
  </section>
{% if loop.index == 3 %}
</div>
<div class="govuk-grid-row">
{% endif %}
{% endfor %}
  <section class="govuk-grid-column-full">
    <hr class="govuk-section-break govuk-section-break--visible govuk-section-break--xl govuk-!-margin-top-0">
    <h2 class="govuk-heading-m govuk-!-font-size-27">Contribute</h2>
    <p class="govuk-body">The project repository is public and we welcome contributions from anyone.</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="{{ pkg.repository.url | replace(".git", "") }}">View this project on GitHub</a></p>
  </section>
</div>
