import { renderHook } from '@testing-library/react-hooks'
import { useUnmount } from '../src/hooks/useUnmount'

const mockCallback1 = jest.fn()
const mockCallback2 = jest.fn()
const mockCallback3 = jest.fn()

afterEach(() => {
  jest.resetAllMocks()
})

describe('useUnmount', () => {
  it('should be defined', () => {
    expect(useUnmount).toBeDefined()
  })

  it('should not call provided callback on mount', () => {
    renderHook(() => useUnmount(mockCallback1))

    expect(mockCallback1).not.toHaveBeenCalled()
  })

  it('should not call provided callback on re-renders', () => {
    const hook = renderHook(() => useUnmount(mockCallback1))

    hook.rerender()
    hook.rerender()
    hook.rerender()
    hook.rerender()

    expect(mockCallback1).not.toHaveBeenCalled()
  })

  it('should call provided callback on unmount', () => {
    const hook = renderHook(() => useUnmount(mockCallback1))

    hook.unmount()

    expect(mockCallback1).toHaveBeenCalledTimes(1)
  })

  it('should call provided callback if is has been changed', () => {
    const hook = renderHook((cb) => useUnmount(cb), { initialProps: mockCallback1 })

    hook.rerender(mockCallback2)
    hook.rerender(mockCallback3)
    hook.unmount()

    expect(mockCallback1).not.toHaveBeenCalled()
    expect(mockCallback2).not.toHaveBeenCalled()
    expect(mockCallback3).toHaveBeenCalledTimes(1)
  })
})
