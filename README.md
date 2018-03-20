# `babel-plugin-styled-components-css-templates`

This plugin applies basic templates to the css created by `styled-components`.
Allowing you to easily add multiple class names — or just about anything — to all of your `styled-components`.

## Quick start

Install the plugin:

```
npm install --save-dev babel-plugin-styled-components-css-templates
```

Then add it to your babel configuration:

```JSON
{
  "plugins": ["babel-plugin-styled-components-css-templates"]
}
```
is equivalent to:
```JSON
{
  "plugins": [
    [
      "babel-plugin-styled-components-css-templates",
      {
        "styeld": "&& {{{css}}}"
      }
    ]
  ]
}
```
The plugin provides three options: `styled`, `css`, and `injectGlobal`.
Each option represents the template to apply to the `styled-componets` functions by the same name.
The first instance of `{{css}}` in the template will be replaced with the CSS from the styled components. All other instances of `{{css}}` will be removed.
For now `styled` and `css` are templated seperately but in the future this might be combined.

## Example

```JSON
{
  "plugins": [
    [
      "babel-plugin-styled-components-css-templates",
      {
        "styeld": "&& {{{css}}}",
        "css": "& { all: unset; {{css}} }",
        "injectGlobal": "#my-css-id > {{{css}}}"
      }
    ]
  ]
}
```

With the above configuration. The following input:

```JS
import styled, { css, injectGlobal } from 'styled-components';

const BlueSpan = styled.span`
  color: darkslateblue;
`;

const GreenSpan = styled.span`
  color: darkseagreen;
`;

const ccsHelper = css`
  font-size: 16pt;
`;

injectGlobal`
  div {
    background-color: white;
  }
`;
```

is transformed to:

```JS
import styled, { css, injectGlobal } from 'styled-components';

const BlueSpan = styled.span`&& {
  background-color: darkslateblue;
}`;

const GreenSpan = styled.span`&& {
  color: darkseagreen;
}`;

const ccsHelper = css`& {
  all: unset;
  font-size: 16pt;
}`;

injectGlobal`#my-css-id > {
  div {
    background-color: white;
  }
}`;
```

Licensed under the MIT License, Copyright © 2018 William Stewart.

See [LICENSE.md](./LICENSE.md) for more information.
