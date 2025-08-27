---
layout: sub-navigation
order: 7
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

| Name                | Type   | Description                                                                                            |
| ------------------- | ------ | ------------------------------------------------------------------------------------------------------ |
| items               | array  | **Required**. An array of navigation links. See [options for items](#options-for-items-array-objects). |
| visuallyHiddenTitle | string | A hidden title for the navigation (default is ‘Pages in this section’)                                 |
| classes             | string | Classes to add to the sub navigation container                                                         |
| attributes          | object | HTML attributes (for example data attributes) to add to the container                                  |

### Options for `items` array objects

| Name     | Type    | Description                                                                                                            |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| text     | string  | **Required**. Text of the navigation link.                                                                             |
| href     | string  | **Required**. The value of the navigation link’s `href` attribute.                                                     |
| current  | boolean | Indicate that the item is the current page                                                                             |
| parent   | boolean | Indicate if the item is a parent. Use when the current item or any of its children are active.                         |
| theme    | string  | A name to group items by. If several navigation items share the same theme, they will appear together under that name. |
| children | array   | An array of items as child navigation links. See [options for children](#options-for-children-array-objects).          |
| classes  | string  | Classes to add to the navigation item                                                                                  |

### Options for `children` array objects

| Name    | Type    | Description                                                        |
| ------- | ------- | ------------------------------------------------------------------ |
| text    | string  | **Required**. Text of the navigation link.                         |
| href    | string  | **Required**. The value of the navigation link’s `href` attribute. |
| current | boolean | Indicate that the item is the current page                         |
