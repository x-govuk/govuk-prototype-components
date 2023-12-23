---
layout: sub-navigation
order: 6
title: Sub navigation
description: Link to sibling pages in a multi-page section of your service.
---

{% from "example/macro.njk" import appExample %}

{{ appExample({
  example: "sub-navigation"
}) }}

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
      { text: "items" },
      { text: "Array" },
      { text: "**Required**. An array of navigation links. See [items](#items)." | markdown }
    ],
    [
      { text: "visuallyHiddenTitle" },
      { text: "string" },
      { text: "A hidden title for the navigation." }
    ],
    [
      { text: "classes" },
      { text: "string" },
      { text: "Classes to add to the sub navigation container." }
    ],
    [
      { text: "attributes" },
      { text: "object" },
      { text: "HTML attributes (for example data attributes) to add to the container." }
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
    ],
    [
      { text: "current" },
      { text: "boolean" },
      { text: "Indicate that the item is the current page." }
    ],
    [
      { text: "parent" },
      { text: "boolean" },
      { text: "Indicate if the item is a parent. Use when the current item or any of its children are active." }
    ],
    [
      { text: "theme" },
      { text: "string" },
      { text: "A name to group items by. If several navigation items share the same theme, they will appear together under that name." }
    ],
    [
      { text: "children" },
      { text: "Array" },
      { text: "An array of items as child navigation links. See [children](#children)." | markdown }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "children" },
  caption: "Options for children",
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
    ],
    [
      { text: "current" },
      { text: "boolean" },
      { text: "Indicate that the item is the current page." }
    ]
  ]
}) }}
