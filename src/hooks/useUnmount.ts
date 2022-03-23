import { useRef } from 'react'

import { useEffectOnce } from './useEffectOnce'

export const useUnmount = <T = unknown>(fn: () => any) => {
  const fnRef = useRef(fn)
  fnRef.current = fn
  useEffectOnce(() => () => fnRef.current())
}
