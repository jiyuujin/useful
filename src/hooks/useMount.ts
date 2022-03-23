import { useEffectOnce } from './useEffectOnce'

export const useMount = <T = unknown>(fn: () => void) => {
  useEffectOnce(() => {
    fn()
  })
}
