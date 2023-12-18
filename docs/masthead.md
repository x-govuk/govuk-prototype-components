---
layout: sub-navigation
order: 3
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

To ensure there is no gap between the header and the masthead, create a modifier class to remove the bottom border from the header:

{{ appExample({
  example: "masthead-below-header"
}) }}

If your service uses [the primary navigation component](primary-navigation), this should appear directly above the masthead:

{{ appExample({
  example: "masthead-below-primary-navigation"
}) }}

You can use HTML or, if you are using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

## Component options

Use options to customise the appearance, content and behaviour of a component when using a macro, for example, changing the text.

Some options are required for the macro to work; these are marked as “Required” in the option description.

If you’re using Nunjucks macros in production with `html` options, or ones ending with `html`, you must sanitise the HTML to protect against [cross-site scripting exploits](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).

| Name            | Type           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :-------------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **classes**     | string         | Classes to add to the masthead container.                                                                                                                                                                                                                                                                                                                                                                                                     |
| **attributes**  | object         | HTML attributes (for example data attributes) to add to the masthead.                                                                                                                                                                                                                                                                                                                                                                         |
| **title**       | object         | Title text shown in the masthead. See [title](#options-for-title).                                                                                                                                                                                                                                                                                                                                                                            |
| **description** | object         | Description text shown in the masthead. See [description](#options-for-description).                                                                                                                                                                                                                                                                                                                                                          |
| **startButton** | object         | Options for start button. See [startButton](#options-for-startButton).                                                                                                                                                                                                                                                                                                                                                                        |
| **image**       | object         | Options for image displayed on the right of the masthead on desktop layouts. See [image](#options-for-image).                                                                                                                                                                                                                                                                                                                                 |
| **phaseBanner** | object         | Options for the phase banner component. See [phase banner component](https://design-system.service.gov.uk/components/phase-banner/) in the GOV.UK Design System.                                                                                                                                                                                                                                                                              |
| **breadcrumbs** | object         | Options for the breadcrumbs component. See [breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs/) in the GOV.UK Design System.                                                                                                                                                                                                                                                                                 |
| **caller**      | nunjucks-block | Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire masthead component in a `call` block. Content called this way appears between the breadcrumbs (if present) and the title. |

### Options for title

| Name     | Type   | Description                                                                                                                                                                                         |
| :------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **text** | string | The title text that displays in the masthead. You can use any string with this option. If you set `title.html`, this option is not required and is ignored.                                         |
| **html** | string | The title HTML that displays in the masthead. You can use any string with this option. Use this option to set text that contains HTML. If you set `title.html`, the `title.text` option is ignored. |

### Options for description

| Name     | Type   | Description                                                                                                                                                                                                           |
| :------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **text** | string | The description text that displays in the masthead. You can use any string with this option. If you set `description.html`, this option is not required and is ignored.                                               |
| **html** | string | The description HTML that displays in the masthead. You can use any string with this option. Use this option to set text that contains HTML. If you set `description.html`, the `description.text` option is ignored. |

### Options for startButton

| Name           | Type   | Description                                                                                                                                                                                                                                                                                                                            |
| :------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **text**       | string | **Required**. If `startButton.html` is set, this is not required. Text for the button or link. If html is provided, the text argument will be ignored and element will be automatically set to button unless href is also set, or it has already been defined. This argument has no effect if element is set to input.                 |
| **html**       | string | **Required**. If `startButton.text` is set, this is not required. HTML for the button or link. If `startButton.html` is provided, the text argument will be ignored and element will be automatically set to button unless `href` is also set, or it has already been defined. This argument has no effect if element is set to input. |
| **name**       | string | Name for the `button`. This has no effect on `a` elements.                                                                                                                                                                                                                                                                             |
| **type**       | string | Type of `button` – `button`, `submit` or `reset`. Defaults to `submit`. This has no effect on `a` elements.                                                                                                                                                                                                                            |
| **href**       | string | The URL that the button should link to. If this is set, element will be automatically set to `a`.                                                                                                                                                                                                                                      |
| **classes**    | string | Classes to add to the button component.                                                                                                                                                                                                                                                                                                |
| **attributes** | object | HTML attributes (for example data attributes) to add to the button component.                                                                                                                                                                                                                                                          |

### Options for image

| Name    | Type   | Description                                                             |
| :------ | :----- | :---------------------------------------------------------------------- |
| **src** | string | URL of image displayed on the right of the masthead on desktop layouts. |
| **alt** | array  | Alternative text for image.                                             |

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
