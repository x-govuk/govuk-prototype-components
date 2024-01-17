---
layout: sub-navigation
order: 6
title: Secondary navigation
description: Allow users to navigate between pages scoped to a section.
---

{% from "example/macro.njk" import appExample %}

{{ appExample({
  example: "secondary-navigation"
}) }}

## When to use this component

Use the secondary navigation when you already have a [primary navigation](primary-navigation) and need to let users navigate between pages that are scoped to a particular section or concept.

For example, if your service is a case management system, you might use the secondary navigation if there are multiple pages associated with a single case.

## When not to use this component

Do not use this component for the primary sections of your service, or if a [sub-navigation](sub-navigation) would be more appropriate.

You could also consider using the [tabs component](https://design-system.service.gov.uk/components/tabs/) if the amount of content in each sub-section is small.

## How it works

{{ appExample({
  example: "secondary-navigation-with-header"
}) }}

Unlike [tabs](https://design-system.service.gov.uk/components/tabs/), secondary navigation does not use JavaScript. Each item within the navigation is a link to a separate full page.

One of the items should always be highlighted as the current page. This item remains a link, but uses black text and has a line beneath it.

The secondary navigation should appear before the `<main>` element of the page. This means that it is skipped when [skip link](https://design-system.service.gov.uk/components/skip-link/) is used.

The scope of the secondary navigation can be given by an associated heading. When doing this, you should set `labelledBy` to be the `id` of the heading, so that it is associated with the heading for screen reader users.

The title of the current page can be repeated below the sub navigation, inside the `<main>` element, using a heading tag.

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
      { text: "labelledBy" },
      { text: "string" },
      { text: "A reference to the id of an existing heading on a page which acts as the label for the navigation." }
    ],
    [
      { text: "visuallyHiddenTitle" },
      { text: "string" },
      { text: "A visually-hidden label to describe the navigation (default is ‘Secondary Menu’). Not included if `labelledBy` is set instead." | markdown }
    ],
    [
      { text: "classes" },
      { text: "string" },
      { text: "Classes to add to the secondary navigation container." }
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
      { text: "classes" },
      { text: "string" },
      { text: "Classes to add to the navigation item." }
    ]
  ]
}) }}

## Research on this component

This component is based on ones originally developed as part of the Ministry of Justice and HMCTS design systems.

Versions of this component are currently used on these services:

- [Manage training for early career teachers](https://manage-training-for-early-career-teachers.education.gov.uk)
- [Register trainee teachers](https://www.register-trainee-teachers.service.gov.uk)
- [Teaching Vacancies](https://teaching-vacancies.service.gov.uk)

More research is needed on:

- how best to display the items on narrow mobile screens
- making the component as accessible as possible
