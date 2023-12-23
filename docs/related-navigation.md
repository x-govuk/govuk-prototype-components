---
layout: sub-navigation
order: 5
title: Related navigation
description: Show related content when prototyping guidance pages.
---

{% from "example/macro.njk" import appExample %}

{{ appExample({
  example: "related-navigation"
}) }}

This component, [based on one from GOV.UK Publishing components](https://components.publishing.service.gov.uk/component-guide/related_navigation), may be useful if you are prototyping guidance pages that could be published on GOV.UK, or if your service needs to show related navigation.

You can use HTML or, if you are using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

## Nunjucks macro options

Use options to customise the appearance, content and behaviour of a component when using a macro, for example, changing the text.

Some options are required for the macro to work; these are marked as “Required” in the option description.

If you’re using Nunjucks macros in production with `html` options, or ones ending with `html`, you must sanitise the HTML to protect against [cross-site scripting exploits](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "headingLevel" },
      { text: "integer" },
      { text: "Heading level, from `1` to `6` (default is `2`)." | markdown }
    ],
    [
      { text: "sections" },
      { text: "Array" },
      { text: "An array of sections within the related navigation. See [sections](#sections)." | markdown }
    ],
    [
      { text: "classes" },
      { text: "string" },
      { text: "Classes to add to the related navigation container." }
    ],
    [
      { text: "attributes" },
      { text: "object" },
      { text: "HTML attributes (for example data attributes) to add to the container." }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "sections" },
  caption: "Options for sections",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "title" },
      { text: "string" },
      { text: "The title text that displays above the list of navigation links (default is ‘Related content’)." }
    ],
    [
      { text: "id" },
      { text: "string" },
      { text: "ID attribute to add to the section container." }
    ],
    [
      { text: "items" },
      { text: "Array" },
      { text: "**Required**. An array of navigation links within the section. See [items](#items)." |markdown }
    ],
    [
      { text: "subsections" },
      { text: "Array" },
      { text: "An array of subsections within the section. See [subsections](#subsections)." | markdown }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "subsections" },
  caption: "Options for subsections",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "title" },
      { text: "string" },
      { text: "The title text that displays above the list of navigation links." }
    ],
    [
      { text: "id" },
      { text: "string" },
      { text: "ID attribute to add to the subsection container." }
    ],
    [
      { text: "items" },
      { text: "Array" },
      { text: "**Required**. An array of navigation links within the subsection. See [items](#items)." | markdown }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "items" },
  caption: "Options for items",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "text" },
      { text: "string" },
      { text: "**Required**. Text of the navigation link." | markdown }
    ],
    [
      { text: "href" },
      { text: "string" },
      { text: "**Required**. The value of the navigation link’s `href` attribute." | markdown }
    ]
  ]
}) }}
