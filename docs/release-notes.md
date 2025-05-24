---
layout: sub-navigation
order: 1
title: Release notes
---

This page documents the changes in major and minor releases, including upgrade notes. See [release notes on GitHub](https://github.com/x-govuk/govuk-prototype-components/releases) for full details of patch releases.

[[toc]]

## Version 4.0

May 2025

### Breaking changes

- Removes the primary navigation component. Use the [service navigation component](https://design-system.service.gov.uk/components/service-navigation/) in the GOV.UK Design System to help users navigate to the main sections of your service.
- Minified JavaScript file is now provided at `/dist/govuk-prototype-components.min.js`.
- The location of SCSS files has changed. For all components, update your import statement to:

  ```diff
  - @import "node_modules/@x-govuk/govuk-prototype-components/x-govuk/all";
  + @import "node_modules/@x-govuk/govuk-prototype-components/src/x-govuk"
  ```

  For individual components, update your import statements to:

  ```diff
  - @import "node_modules/@x-govuk/govuk-prototype-components/x-govuk/components/masthead/masthead";
  + @import "node_modules/@x-govuk/govuk-prototype-components/src/x-govuk/components/masthead";
  ```

- The location of Nunjucks files has changed. Either update the path used in your templates:

  ```diff
  - {% raw %}{% from "node_modules/@x-govuk/govuk-prototype-components/x-govuk/components/masthead/macro.njk" import xGovukMasthead %}{% endraw %}
  + {% raw %}{% from "node_modules/@x-govuk/govuk-prototype-components/src/x-govuk/components/masthead/macro.njk" import xGovukMasthead %}{% endraw %}
  ```

  or update the your **searchPaths** array to point to the `/src` directory:

  ```diff
    const nunjucks = new Nunjucks.Environment(
      new Nunjucks.FileSystemLoader([
  -     './node_modules/@x-govuk/govuk-prototype-components'
  +     './node_modules/@x-govuk/govuk-prototype-components/src'
      ])
    )
  ```

### New features

- Adds support for [Sass modules](https://sass-lang.com/documentation/modules/) and `pkg:` importing. You can now import component styles into your project like so:

  ```diff
  - @import "node_modules/@x-govuk/govuk-prototype-components/x-govuk/all";
  + @import "pkg:@x-govuk/govuk-prototype-components"
  ```

  For individual components, use the following:

  ```diff
  - @import "node_modules/@x-govuk/govuk-prototype-components/x-govuk/components/masthead/masthead";
  + @import "pkg:@x-govuk/govuk-prototype-components/masthead";"
  ```

## Version 3.0

December 2023

### Breaking changes

- Removes the negative top margin of the [Masthead component](/masthead/). Instead, follow instructions on the Masthead component page to remove the blue border from the bottom of the GOV.UK header using a custom class.
- Removes the `x-govuk-masthead--large` variant of the Masthead - this class can now be removed.
- Removes the negative top margin from the [Primary navigation component](/primary-navigation/). Instead, follow the instructions on the Primary navigation component to remove the bottom border from either the phase banner or to make the blue order at the bottom of the GOV.UK Header full width.
- Updates to use version 5.0 of GOV.UK Frontend

### New features

- Adds the [secondary navigation component](/secondary-navigation/)

## Version 2.2

December 2023

- Updates minimum Node.js requirement to version 18 or above
- Updates minimum GOV.UK Prototype Kit version to 13.15
- Other dependency updates

## Version 2.1

November 2023

- Removes horizontal padding within [primary navigation](/primary-navigation)
- Increases height of the [primary navigation](/primary-navigation)
- Adds support for Node.js version 20

## Version 2.0

March 2023

### Breaking changes

- Removes the task list component as this has been added to the GOV.UK Design system
- Removes the summary card component as this has been added to the GOV.UK Design system

## Version 1.1

January 2023

- Add example templates
- Improve compatibility with GOV.UK Prototype Kit version 13
- Updates dependencies

## Version 1.0

August 2022

First version of GOV.UK Prototype Components.

After 5 months of testing and iteration, this first release provides canonical code for a number of components that are widely used across government, but do not yet form part of the GOV.UK Design System.
