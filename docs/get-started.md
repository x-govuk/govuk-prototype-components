---
layout: sub-navigation
order: 0
title: Get started
---

## Requirements

- [Node.js](https://nodejs.org/) v20.19 or later
- [GOV.UK Frontend](https://frontend.design-system.service.gov.uk) v5 or later

See [supported versions](/supported-versions) for more details.

## Installation

```shell
npm install @x-govuk/govuk-prototype-components
```

## Usage with the GOV.UK Prototype Kit

GOV.UK Prototype Components are designed to work with the GOV.UK Prototype Kit.

If you are using v13 or later of the kit, the components will be immediately available once you have installed the package, and can be [managed alongside other plugins in your prototype](https://prototype-kit.service.gov.uk/docs/install-and-use-plugins).

## Advanced usage

If you are using an earlier version of the GOV.UK Prototype Kit, or only want to install selected components, you can do so by following the instructions below.

### CSS

To import all the Sass rules from GOV.UK Prototype Components, add the following to your Sass file:

```scss
@import "node_modules/@x-govuk/govuk-prototype-components/src/x-govuk";
```

or using the Sass module system and `pkg:` importing:

```scss
@forward "pkg:@x-govuk/govuk-prototype-components";
```

You can also import Sass rules for an individual component. For example, to import styles for the masthead component, add the following to your Sass file:

```scss
@import "node_modules/@x-govuk/govuk-prototype-components/src/x-govuk/components/masthead";
```

or using the Sass module system and `pkg:` importing:

```scss
@forward "pkg:@x-govuk/govuk-prototype-components/masthead";
```

### JavaScript

To import the JavaScript for the GOV.UK Prototype Components, you can either:

- add the GOV.UK Prototype Components JavaScript file to your HTML
- import the JavaScript using a bundler like [Webpack](https://webpack.js.org/)

#### Add the JavaScript file to your HTML

If you decide to add the JavaScript to your HTML, first either:

- set up your routing so that requests for the JavaScript file are served from `node_modules/@x-govuk/govuk-prototype-components/dist/govuk-prototype-components.min.js`
- copy the `node_modules/@x-govuk/govuk-prototype-components/dist/govuk-prototype-components.min.js` file into your application

Then import the JavaScript file before the closing `</body>` tag of your HTML page or page template, and run the `initAll` function to initialise all the components.

```html
<body>
  ...
  <script src="<YOUR-APP>/<YOUR-JS-FILE>.js"></script>
  <script>
    window.GOVUKPrototypeComponents.initAll()
  </script>
</body>
```

#### Import JavaScript using ES modules

If you decide to import using a bundler, use `import` to import all GOV.UK Prototype Components, then run the `initAll` function to initialise them:

```js
import { initAll } from '@x-govuk/govuk-prototype-components'

initAll()
```

You can also import the JavaScript for an individual component. For example, to import the autocomplete component, add the following to your JavaScript file:

```js
import { Autocomplete } from '@x-govuk/govuk-prototype-components'

const myAutocomplete = document.querySelector('#my-autocomplete')
new Autocomplete(myAutocomplete).init()
```
