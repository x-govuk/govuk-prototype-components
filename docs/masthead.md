---
layout: sub-navigation
order: 4
title: Masthead
description: Introduce users to your product or service.
---

{% from "example/macro.njk" import appExample %}

{{ appExample({
  example: "masthead"
}) }}

## When to use this component

Use the masthead component on the landing page of non-transactional, product-orientated services.

Use this component to introduce users to your service and its primary benefits. Optionally provide a link to the primary call to action such as signing up or reading the instructions on how to get started.

## How it works

The masthead uses your service’s brand colour (set using `$govuk-brand-colour`) and can include:

- a [phase banner](https://design-system.service.gov.uk/components/phase-banner/)
- [breadcrumbs](https://design-system.service.gov.uk/components/breadcrumbs/)
- the product name or proposition
- a description of key benefits
- a call to action button
- a representative illustration

It should appear directly below the header, and take up the full width of the page.

If your service uses [the service navigation component](https://design-system.service.gov.uk/components/service-navigation/), this should appear directly above the masthead:

{{ appExample({
  example: "masthead-below-service-navigation"
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
      { text: "title" },
      { text: "object" },
      { text: "Title text shown in the masthead. See [title](#title)." | markdown }
    ],
    [
      { text: "description" },
      { text: "object" },
      { text: "Short description text shown below the title. See [description](#description)." | markdown }
    ],
    [
      { text: "startButton" },
      { text: "object" },
      { text: "Options for start button. See [startButton](#start-button)." | markdown }
    ],
    [
      { text: "image" },
      { text: "object" },
      { text: "Options for image displayed on the right of the masthead on desktop layouts. See [image](#image)." | markdown }
    ],
    [
      { text: "phaseBanner" },
      { text: "object" },
      { text: "Options for the phase banner component. See [phase banner component](https://design-system.service.gov.uk/components/phase-banner/) in the GOV.UK Design System." | markdown }
    ],
    [
      { text: "breadcrumbs" },
      { text: "object" },
      { text: "Options for the breadcrumbs component. See [breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs/) in the GOV.UK Design System." | markdown }
    ],
    [
      { text: "caller" },
      { text: "nunjucks-block" },
      { text: "Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire masthead component in a `call` block. Content called this way appears between the breadcrumbs (if present) and the title." | markdown }
    ],
    [
      { text: "classes" },
      { text: "string" },
      { text: "Classes to add to the masthead container." }
    ],
    [
      { text: "attributes" },
      { text: "object" },
      { text: "HTML attributes (for example data attributes) to add to the navigation container." }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "title" },
  caption: "Options for title",
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
      { text: "The title text that displays in the masthead. You can use any string with this option. If you set `title.html`, this option is not required and is ignored." | markdown }
    ],
    [
      { text: "html" },
      { text: "string" },
      { text: "The title HTML that displays in the masthead. You can use any string with this option. Use this option to set text that contains HTML. If you set `title.html`, the `title.text` option is ignored." | markdown }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "description" },
  caption: "Options for description",
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
      { text: "The description text that displays in the masthead. You can use any string with this option. If you set `description.html`, this option is not required and is ignored." | markdown }
    ],
    [
      { text: "html" },
      { text: "string" },
      { text: "The description HTML that displays in the masthead. You can use any string with this option. Use this option to set text that contains HTML. If you set `description.html`, the `description.text` option is ignored." | markdown }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "start-button" },
  caption: "Options for startButton",
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
      { text: "**Required**. If `startButton.html` is set, this is not required. Text for the button or link. If html is provided, the text argument will be ignored and element will be automatically set to button unless href is also set, or it has already been defined. This argument has no effect if element is set to input." | markdown }
    ],
    [
      { text: "html" },
      { text: "string" },
      { text: "**Required**. If `startButton.text` is set, this is not required. HTML for the button or link. If `startButton.html` is provided, the text argument will be ignored and element will be automatically set to button unless `href` is also set, or it has already been defined. This argument has no effect if element is set to input." | markdown }
    ],
    [
      { text: "name" },
      { text: "string" },
      { text: "Name for the `button`. This has no effect on `a` elements." | markdown }
    ],
    [
      { text: "type" },
      { text: "string" },
      { text: "Type of `button` – `button`, `submit` or `reset`. Defaults to `submit`. This has no effect on `a` elements." | markdown }
    ],
    [
      { text: "href" },
      { text: "string" },
      { text: "The URL that the button should link to. If this is set, element will be automatically set to `a`." | markdown }
    ],
    [
      { text: "classes" },
      { text: "string" },
      { text: "Classes to add to the button component." }
    ],
    [
      { text: "attributes" },
      { text: "object" },
      { text: "HTML attributes (for example data attributes) to add to the button component." }
    ]
  ]
}) }}

{{ govukTable({
  attributes: { id: "image" },
  caption: "Options for image",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Name" },
    { text: "Type" },
    { text: "Description" }
  ],
  rows: [
    [
      { text: "src" },
      { text: "string" },
      { text: "**Required**. URL for the masthead image." | markdown }
    ],
    [
      { text: "alt" },
      { text: "string" },
      { text: "Alternative text for masthead image." }
    ]
  ]
}) }}

## Research on this component

This component is based on the Masthead component used in the [Product Page Example](https://github.com/alphagov/product-page-example). This in turn was based on the product pages for:

- [GOV.UK Design System](https://design-system.service.gov.uk)
- [GOV.UK Forms](https://www.forms.service.gov.uk)
- [GOV.UK GovWifi](https://www.wifi.service.gov.uk)
- [GOV.UK Notify](https://www.notifications.service.gov.uk)
- [GOV.UK One Login](https://www.sign-in.service.gov.uk)
- [GOV.UK Pay](https://www.payments.service.gov.uk)

Versions of this component are currently being used on these services:

- [Ethnicity facts and figures](https://www.ethnicity-facts-figures.service.gov.uk)
- [Find a Learning Aim](https://submit-learner-data.service.gov.uk/find-a-learning-aim/)
- [Find planning and housing data in England](https://www.planning.data.gov.uk/)
- [Gender pay gap service](https://gender-pay-gap.service.gov.uk)
- [HMRC Developer Hub](https://developer.service.hmrc.gov.uk/api-documentation)
- [Register trainee teachers](https://www.register-trainee-teachers.service.gov.uk)

### Known issues

It’s currently not possible to place this component within the `main` element when using the default Nunjucks template. If you are able to update your application’s layout, you should adjust it so that the `main` element encapsulates this component.
