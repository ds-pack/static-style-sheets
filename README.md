# Static Style Sheets

A mostly compile-time CSS in JS library, in progress!

## Installation:

```sh
yarn add static-style-sheets
```

## Usage:

1. Configure in Babel config:

```tsx
// in .babelrc / babel.config.js / etc
module.exports = {
  plugins: ['static-style-sheets/plugin'],
}
```

2. Use within your code!

```tsx
import styles from 'static-style-sheets'

const className = styles({
  color: 'blue',
})

export function Button() {
  return <button className={className}>Click Here!</button>
}
```

## Notes:

- The result of calling `styles` may return multiple classnames, don't depend on
  it returning a single classname!
- For the moment, the argument (an object of CSS styles) passed to `styles` must
  be entirely static

### Tools:

- Typescript
- Babel
- Jest
