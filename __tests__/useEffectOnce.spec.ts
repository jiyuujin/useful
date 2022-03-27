import { renderHook } from '@testing-library/react-hooks'
import { useEffectOnce } from '../src/hooks/useEffectOnce'

const mockEffect = jest.fn()
const mockCallback = jest.fn().mockReturnValue(mockEffect)

it('should run provided effect only once', () => {
  const { rerender } = renderHook(() => useEffectOnce(mockCallback))

  expect(mockCallback).toHaveBeenCalledTimes(1)

  rerender()

  expect(mockCallback).toHaveBeenCalledTimes(1)
})

it('should run clean-up provided on unmount', () => {
  const { unmount } = renderHook(() => useEffectOnce(mockCallback))

  expect(mockEffect).toHaveBeenCalledTimes(1)

  unmount()

  expect(mockEffect).toHaveBeenCalledTimes(2)
})
