# Task list

The task list page pattern is documented on the GOV.UK Design System, yet the required component is not provided by GOV.UK Frontend, only as [a coded example in the GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/docs/templates/task-list).

Find out when to use a task list in your service in the [GOV.UK Design System](https://design-system.service.gov.uk/patterns/task-list-pages/).

## Example usage

```njk
{{ xGovukTaskList({
  sections: [{
    titleText: "Check before you start",
    items: [{
      text: "Check eligibility",
      href: "#",
      tag: {
        text: "Completed"
      }
    }, {
      text: "Read declaration",
      href: "#",
      tag: {
        text: "Completed"
      }
    }]
  }, {
    titleText: "Prepare application",
    items: [{
      text: "Company information",
      href: "#",
      tag: {
        text: "Completed"
      }
    }, {
      text: "Your contact details",
      href: "#",
      tag: {
        colour: "blue",
        text: "In progress"
      }
    }, {
      text: "Provide financial evidence",
      tag: {
        colour: "grey",
        text: "Cannot start yet"
      }
    }]
  }, {
    titleText: "Apply",
    items: [{
      text: "Submit and pay",
      tag: {
        colour: "grey",
        text: "Cannot start yet"
      }
    }]
  }]
}) }}
```

## Component options

Use options to customise the appearance, content and behaviour of a component when using a macro, for example, changing the text.

Some options are required for the macro to work; these are marked as “Required” in the option description.

If you’re using Nunjucks macros in production with `html` options, or ones ending with `html`, you must sanitise the HTML to protect against [cross-site scripting exploits](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).

| Name | Type | Description |
| :--- | :--- | :---------- |
| **headingLevel** | integer | Heading level, from `1` to `6`. Default is `2`. |
| **classes** | string | Classes to add to the task list. |
| **attributes** | object | HTML attributes (for example data attributes) to add to the task list. |
| **items** | array | An array of tasks within the task list. See [items](#options-for-items). If you set `sections`, the `items` option is ignored. |
| **sections** | array | An array of sections within the task list. See [sections](#options-for-sections). |
| **disableSectionNumbering** | boolean | If set to `true`, sections will not be numbered. |

### Options for sections

| Name | Type | Description |
| :--- | :--- | :---------- |
| **titleText** | string | **Required**. The title text that displays above the list of tasks. You can use any string with this option. If you set `titleHtml`, this option is not required and is ignored. |
| **titleHtml** | string | **Required**. The title HTML that displays above the list of tasks. You can use any string with this option. Use this option to set text that contains HTML. If you set `titleHtml`, the `titleText` option is ignored. |
| **items** | array | **Required**. An array of tasks within the section. See [items](#options-for-items). |

### Options for items

| Name | Type | Description |
| :--- | :--- | :---------- |
| **text** | string | **Required**. Text of the task item. |
| **href** | array | The value of the link’s `href` attribute for an task item. |
| **tag.colour** | string | Tag colour. One of either `grey`, `green`, `turquoise`, `blue`, `purple`, `pink`, `red`, `orange` or `yellow`. |
| **tag.text** | string | **Required.** If `tag.html` is set, this is not required. Text to use within the tag component. If `tag.html` is provided, the `tag.text` argument will be ignored. |
| **tag.html** | string | **Required.** If `tag.text` is set, this is not required. HTML to use within the tag component. If `tag.html` is provided, the `tag.text` argument will be ignored. |
| **tag.classes** | string | Classes to add to the tag. |
| **tag.attributes** | object | HTML attributes (for example data attributes) to add to the tag. |
