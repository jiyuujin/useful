# useful

## Installation

Install [@nekohack/useful](https://www.npmjs.com/package/@nekohack/useful) package.

```bash
npm i @nekohack/useful
npm i react react-dom

yarn add @nekohack/useful
yarn add react react-dom
```

## Hooks

### `useMount`

Handle the mounted state and make changes to it.

```tsx
import { useMount } from './useMount'

const App = () => {
  useMount(() => {
    //
  })
  return <></>
}
```

### `useUnmount`

Handle the unmounted state and make changes to it.

```tsx
import { useUnmount } from './useUnmount'

const App = () => {
  useUnmount(() => {
    //
  })
  return <></>
}
```
