---
layout: sub-navigation
order: 6
title: Sub navigation
description: Link to sibling pages in a multi-page section of your service.
---

{% from "example/macro.njk" import appExample %}

{{ appExample({
  example: "sub-navigation"
}) }}

## Component options

Use options to customise the appearance, content and behaviour of a component when using a macro, for example, changing the text.

Some options are required for the macro to work; these are marked as “Required” in the option description.

If you’re using Nunjucks macros in production with `html` options, or ones ending with `html`, you must sanitise the HTML to protect against [cross-site scripting exploits](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).

| Name                    | Type   | Description                                                                       |
| :---------------------- | :----- | :-------------------------------------------------------------------------------- |
| **items**               | array  | **Required**. An array of navigation links. See [items](#options-for-items).      |
| **classes**             | string | Classes to add to the related navigation.                                         |
| **attributes**          | object | HTML attributes (for example data attributes) to add to the navigation container. |
| **visuallyHiddenTitle** | string | A hidden title for the navigation.                                                |

### Options for items

| Name         | Type    | Description                                                                                                            |
| :----------- | :------ | :--------------------------------------------------------------------------------------------------------------------- |
| **text**     | string  | **Required**. Text of the navigation link.                                                                             |
| **href**     | array   | **Required**. The value of the navigation link’s `href` attribute.                                                     |
| **current**  | boolean | Indicate that the item is the current page.                                                                            |
| **parent**   | boolean | Indicate if the item is a parent. Use when the current item or any of its children are active.                         |
| **theme**    | string  | A name to group items by. If several navigation items share the same theme, they will appear together under that name. |
| **children** | string  | An array of items as child navigation links. See [children](#options-for-children).                                    |

### Options for children

| Name        | Type    | Description                                                        |
| :---------- | :------ | :----------------------------------------------------------------- |
| **text**    | string  | **Required**. Text of the navigation link.                         |
| **href**    | array   | **Required**. The value of the navigation link’s `href` attribute. |
| **current** | boolean | Indicate that the item is the current page.                        |
