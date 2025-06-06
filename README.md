# GOV.UK Prototype Components · [![test](https://github.com/x-govuk/govuk-prototype-components/actions/workflows/test.yml/badge.svg)](https://github.com/x-govuk/govuk-prototype-components/actions/workflows/test.yml)

Common and experimental components that are not yet part of the GOV.UK Design System.

## Requirements

Node.js v20.19 or later.

## Installation

```shell
npm install @x-govuk/govuk-prototype-components
```

## Usage

If you are using version 13 or later of the GOV.UK Prototype Kit, the components will be immediately available for use in Nunjucks templates.

Learn more about how to [get started](https://x-govuk.github.io/govuk-prototype-components/get-started/).

> [!NOTE]
> Prior to v1.0.0, this project included a collection of decorated form components. These can now be found in the [`govuk-decorated-components`](https://github.com/x-govuk/govuk-decorated-components) package.

## Contributing

Bug reports and feature requests are welcome. Please raise an issue or submit a pull request.

We use [StandardJS](https://standardjs.com) to ensure code follows [the GDS way](https://gds-way.cloudapps.digital/manuals/programming-languages/js.html). Use `npm run lint` to check your code before submitting a pull request.

## Testing

```shell
npm test
```

## Releasing a new version

`npm run release`

This command will ask you what version you want to use. It will then publish a new version on NPM, create and push a new git tag and then generate release notes ready for posting on GitHub.

> [!NOTE]
> Releasing a new version requires permission to publish packages to the `@x-govuk` organisation.
