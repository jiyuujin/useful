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

### `useHover`

Handle the hover element and make changes to it.

```tsx
import { useHover } from './useHover'

const App = () => {
  const [hoverRef, hovering] = useHover<HTMLDivElement>(false)
  return <div ref={hoverRef}>{hovering && <div>{'Hovering Test'}</div>}</div>
}
```

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
