---
layout: sub-navigation
order: 4
title: Masthead
description: Introduce users to a major section or topic area, product or service
---

{% from "example/macro.njk" import appExample %}

{{ appExample({
  example: "masthead"
}) }}

## When to use this component

Use the masthead to

- introduce a major section or topic area
- give greater emphasis to page headings
- guide users into specific areas of functionality
- create visual hierarchy for key landing pages within your service

For example, use it on topic overview pages, category or collection pages, or to introduce a key workflow in your service.

## When not to use this component

Do not use the masthead:

- on every page of your service – reserve it for key landing pages and section introductions
- as a replacement for standard page headings
- when a simple page title would be more appropriate
- on transactional pages where users are completing tasks

## How it works

The masthead uses a lighter tint of your service’s brand colour for its background. It works well for internal pages and section introductions, giving clear hierarchy without overwhelming the page content. It can include:

- a [phase banner](https://design-system.service.gov.uk/components/phase-banner/)
- [breadcrumbs](https://design-system.service.gov.uk/components/breadcrumbs/)
- a title
- a short description
- a call to action button
- a representative illustration

The masthead should appear directly below the header and take up the full width of the page.

You can use HTML or, if you are using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

## Masthead with a dark background

If you need greater visual impact and brand presence, use the masthead with a dark background.

{{ appExample({
  example: "masthead-inverse"
}) }}

Use a masthead with a dark background to:

- introduce users to your service for the first time
- highlight your service’s core value proposition
- create visual impact for your product homepage

You can optionally provide a link to the primary call to action such as signing up or reading the instructions on how to get started.

Make sure all users can see content in the masthead – the background colour must have a contrast ratio of at least 4.5:1 with white to [meet WCAG 2.2 success criterion 1.4.3 Contrast (minimum), level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

### Showing white links and buttons

To configure the component to use a dark background with white text and links:

- add a `x-govuk-masthead--inverse` modifier class to the outer `<div>` element of the component HTML
- add the `govuk-breadcrumbs--inverse` modifier class to the breadcrumb (if you are using one inside the component)
- add the `govuk-button--inverse` modifier class to the start button (if you are using one inside the component)

Or if you’re using Nunjucks, add `inverse: true` to the Nunjucks macro.

### Using alongside the service navigation component

If your service uses [the service navigation component](https://design-system.service.gov.uk/components/service-navigation/), place it directly above the masthead and add the `govuk-service-navigation--inverse` modifier class. This creates a unified header area with the service navigation and masthead appearing as one section.

{{ appExample({
  example: "masthead-inverse-below-service-navigation"
}) }}

### Hiding the image on mobile devices

If you have an image that is decorative and may not add value on smaller screens, you can configure the component to hide it on mobile devices.

To do this, add the `x-govuk-masthead__image--hide-on-mobile` modifier class to the outer `<div>` element that surrounds the image. Or if you’re using Nunjucks, add `hideOnMobile: true` to the Nunjucks macro as shown in this example.

{{ appExample({
  example: "masthead-inverse-image-hide-on-mobile"
}) }}

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
      { text: "inverse" },
      { text: "boolean" },
      { text: "Use the masthead with a dark background. Defaults to `false`" | markdown }
    ],
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
    ],
    [
      { text: "hideOnMobile" },
      { text: "boolean" },
      { text: "When true, the image is hidden on tablet breakpoint and below." }
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
