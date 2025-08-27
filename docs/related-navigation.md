---
layout: sub-navigation
order: 6
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

| Name         | Type    | Description                                                                                                          |
| ------------ | ------- | -------------------------------------------------------------------------------------------------------------------- |
| headingLevel | integer | Heading level, from `1` to `6` (default is `2`)                                                                      |
| sections     | array   | An array of sections within the related navigation. See [options for sections](#options-for-sections-array-objects). |
| classes      | string  | Classes to add to the related navigation container                                                                   |
| attributes   | object  | HTML attributes (for example data attributes) to add to the container                                                |

### Options for `sections` array objects

| Name        | Type   | Description                                                                                                               |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| title       | string | The title text that displays above the list of navigation links (default is ‘Related content’)                            |
| id          | string | ID attribute to add to the section container                                                                              |
| items       | array  | **Required**. An array of navigation links within the section. See [options for items](#options-for-items-array-objects). |
| subsections | array  | An array of subsections within the section. See [options for subsections](#options-for-subsections-array-objects).        |

### Options for `subsections` array objects

| Name  | Type   | Description                                                                                                                  |
| ----- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| title | string | The title text that displays above the list of navigation links                                                              |
| id    | string | ID attribute to add to the subsection container                                                                              |
| items | array  | **Required**. An array of navigation links within the subsection. See [options for items](#options-for-items-array-objects). |

### Options for `items` array objects

| Name | Type   | Description                                                        |
| ---- | ------ | ------------------------------------------------------------------ |
| text | string | **Required**. Text of the navigation link.                         |
| href | string | **Required**. The value of the navigation link’s `href` attribute. |
