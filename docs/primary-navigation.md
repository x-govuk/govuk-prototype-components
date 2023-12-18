---
layout: sub-navigation
order: 4
title: Primary navigation
description: Link to the primary sections of your service.
---

{% from "example/macro.njk" import appExample %}

{{ appExample({
  example: "primary-navigation"
}) }}

## When to use this component

Use the primary navigation component to let users navigate to the main sections of your service.

You must use this component with [the header component](https://design-system.service.gov.uk/components/header/).

## How it works

The primary navigation component takes up the full width of the page. To ensure there is no gap between the header and this component, create a modifying class to make the bottom border on the header also take up the full width of the page:

{{ appExample({
  example: "primary-navigation-below-header"
}) }}

Only include links to top level sections within your service.

One of the items should be highlighted if it matches the current page or parent section. This item remains a link, but includes an `aria-current="page"` attribute with a line displayed beneath it to indicate that it is the current section.

If your service uses [the phase banner component](https://design-system.service.gov.uk/components/phase-banner/), this should appear directly above the primary navigation component.

To ensure there is no border between the phase banner and navigation, create a modifying class to remove the bottom border from the phase banner:

{{ appExample({
  example: "primary-navigation-below-phase-banner"
}) }}

You can use HTML or, if you are using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

## Component options

Use options to customise the appearance, content and behaviour of a component when using a macro, for example, changing the text.

Some options are required for the macro to work; these are marked as “Required” in the option description.

If you’re using Nunjucks macros in production with `html` options, or ones ending with `html`, you must sanitise the HTML to protect against [cross-site scripting exploits](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).

| Name                    | Type   | Description                                                                                             |
| :---------------------- | :----- | :------------------------------------------------------------------------------------------------------ |
| **items**               | array  | **Required**. An array of navigation links within the side navigation. See [items](#options-for-items). |
| **classes**             | string | Classes to add to the primary navigation container.                                                     |
| **attributes**          | object | HTML attributes (for example data attributes) to add to the primary navigation container.               |
| **visuallyHiddenTitle** | string | A hidden title for the side navigation.                                                                 |

### Options for items

| Name        | Type    | Description                                                        |
| :---------- | :------ | :----------------------------------------------------------------- |
| **text**    | string  | **Required**. Text of the navigation link.                         |
| **href**    | array   | **Required**. The value of the navigation link’s `href` attribute. |
| **current** | boolean | Indicate that the item is the current page.                        |
| **classes** | string  | Classes to add to the navigation item.                             |

## Research on this component

This component is based on [the Primary navigation component originally developed as part of the Ministry of Justice Design System](https://design-patterns.service.justice.gov.uk/components/primary-navigation/).

It also follows the design of the [GOV.UK One Login service header](https://github.com/govuk-one-login/service-header).
