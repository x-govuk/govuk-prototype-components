---
layout: sub-navigation
order: 3
title: Code example
description: Show users how to use your components
---
{% from "example/macro.njk" import xGovukExample %}

{{ xGovukExample({
  idPrefix: "code-example",
  previewPath: "/examples/code-example",
  codeSamples: [
    {
      label: {
        text: "HTML"
      },
      content: {
        html: getHtmlCode("code-example")
      }
    },
    {
      label: {
        text: "Nunjucks"
      },
      content: {
        html: getNunjucksCode("code-example")
      }
    }
  ]
}) }}

This component is used in documentation websites (like this one) to show examples and the code behind them.


## Nunjucks macro options

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
      { text: "idPrefix" },
      { text: "string" },
      { text: "**Required**. A unique ID for the component on the page" }
    ],
    [
      { text: "previewPath" },
      { text: "string" },
      { text: "URL path to a page where the example can be viewed" }
    ],
    [
      { text: "codeSamples" },
      { text: "array" },
      { text: "A list of code samples in different languages" }
    ],
    [
      { text: "codeSamples.label.text" },
      { text: "string" },
      { text: "The text label for the code sample, for example 'HTML'" }
    ],
    [
      { text: "codeSamples.content.html" },
      { text: "string" },
      { text: "The code used in that sample. You may need to escape this, and may wany to apply code formatting styles." }
    ]
  ]
}) }}
