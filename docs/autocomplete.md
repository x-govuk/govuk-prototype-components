---
layout: sub-navigation
order: 3
title: Autocomplete
description: Help users find and select from a number of options.
---

{% from "example/macro.njk" import appExample %}

{{ appExample({
  example: "autocomplete"
}) }}

This component implements the [Accessible autocomplete pattern](https://github.com/alphagov/accessible-autocomplete) to enhance a fixed list of options provided by a `<select>` element.

Unlike an autosuggest component, this component will only allow users to choose from a predetermined list of options.

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
      { text: "id" },
      { text: "string" },
      { text: "**Required.** ID for each autocomplete." | markdown }
    ],
    [
      { text: "name" },
      { text: "string" },
      { text: "**Required.** Name property for the autocomplete." | markdown }
    ],
    [
      { text: "items" },
      { text: "Array" },
      { text: "**Required.** Array of option items for the autocomplete. See [items](#items)." | markdown }
    ],
    [
      { text: "value" },
      { text: "string" },
      { text: "Value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item." | markdown }
    ],
    [
      { text: "allowEmpty" },
      { text: "boolean" },
      { text: "Whether to allow no answer to be given (default is `false`)." | markdown }
    ],
    [
      { text: "autoselect" },
      { text: "boolean" },
      { text: "Whether to highlight the first option when the user types in something and receives results. Pressing enter will select it (default is `false`)." | markdown }
    ],
    [
      { text: "displayMenu" },
      { text: "string" },
      { text: "Specify the way the menu should appear, whether `inline` or as an `overlay` (default is `inline`)." | markdown }
    ],
    [
      { text: "minLength" },
      { text: "integer" },
      { text: "The minimum number of characters that should be entered before the autocomplete will attempt to suggest options. When the query length is under this, the aria status region will also provide helpful text to the user informing them they should type in more (default is `0`)." | markdown }
    ],
    [
      { text: "showAllValues" },
      { text: "boolean" },
      { text: "Whether all values are shown when the user clicks the input. This is similar to a default select menu, so the autocomplete is rendered with a dropdown arrow to convey this behaviour (default is `false`)." | markdown }
    ],
    [
      { text: "showNoOptionsFound" },
      { text: "boolean" },
      { text: "Whether to display a ‘No results found’ message when there are no results (default is `true`)." | markdown }
    ],
    [
      { text: "describedBy" },
      { text: "string" },
      { text: "One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users." | markdown }
    ],
    [
      { text: "label" },
      { text: "object" },
      { text: "Label text or HTML by specifying value for either text or html keys. See [label](#label)." | markdown }
    ],
    [
      { text: "hint" },
      { text: "object" },
      { text: "Options for the hint component. See [hint](#hint)." | markdown }
    ],
    [
      { text: "errorMessage" },
      { text: "object" },
      { text: "Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`. See [errorMessage](https://design-system.service.gov.uk/components/error-message/#options-error-message-example) in the GOV.UK Design System." | markdown }
    ],
    [
      { text: "formGroup" },
      { text: "object" },
      { text: "Options for the form-group wrapper. See [formGroup](#form-group)." | markdown }
    ],
    [
      { text: "classes" },
      { text: "string" },
      { text: "Classes to add to the autocomplete container." }
    ],
    [
      { text: "attributes" },
      { text: "object" },
      { text: "HTML attributes (for example data attributes) to add to the autocomplete container." }
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
      { text: "**Required**. Text for the option item." | markdown }
    ],
    [
      { text: "value" },
      { text: "string" },
      { text: "Value for the option item (default is an empty string)." }
    ],
    [
      { text: "selected" },
      { text: "boolean" },
      { text: "Sets the option as selected." }
    ],
    [
      { text: "disabled" },
      { text: "boolean" },
      { text: "Sets the option item as disabled." }
    ],
    [
      { text: "attributes" },
      { text: "object" },
      { text: "HTML attributes (for example data attributes) to add to the option." }
    ]
  ]
}) }}

{% from "govuk/components/table/macro.njk" import govukTable %}
{{ govukTable({
  attributes: { id: "label" },
  caption: "Options for label",
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
      { text: "**Required**. If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` argument will be ignored." | markdown }
    ],
    [
      { text: "html" },
      { text: "string" },
      { text: "**Required**. If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` argument will be ignored." | markdown }
    ],
    [
      { text: "for" },
      { text: "string" },
      { text: "The value of the `for` attribute, the ID of the input the label is associated with." | markdown }
    ],
    [
      { text: "isPageHeading" },
      { text: "boolean" },
      { text: "Whether the label also acts as the heading for the page." }
    ],
    [
      { text: "classes" },
      { text: "string" },
      { text: "Classes to add to the label tag." }
    ],
    [
      { text: "attributes" },
      { text: "object" },
      { text: "HTML attributes (for example data attributes) to add to the label tag." }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "hint" },
  caption: "Options for hint",
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
      { text: "**Required**. If `html` is set, this is not required. Text to use within the hint. If `html` is provided, the `text` argument will be ignored." | markdown }
    ],
    [
      { text: "html" },
      { text: "string" },
      { text: "**Required**. If `text` is set, this is not required. HTML to use within the hint. If `html` is provided, the `text` argument will be ignored." | markdown }
    ],
    [
      { text: "id" },
      { text: "string" },
      { text: "ID attribute to add to the hint span tag." }
    ],
    [
      { text: "classes" },
      { text: "string" },
      { text: "Classes to add to the hint span tag." }
    ],
    [
      { text: "attributes" },
      { text: "object" },
      { text: "HTML attributes (for example data attributes) to add to the hint span tag." }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "form-group" },
  caption: "Options for formGroup",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "classes" },
      { text: "string" },
      { text: "Classes to add to the form group (for example to show error state for the whole group)." }
    ]
  ]
}) }}
