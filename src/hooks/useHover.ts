import { RefObject, useCallback, useEffect, useRef, useState } from 'react'

type UseHoverType<T extends HTMLElement> = [RefObject<T>, boolean]

export const useHover = <T extends HTMLElement>(exactly = false): UseHoverType<T> => {
  const [value, setValue] = useState(false)

  const ref = useRef<T | null>(null)

  const handleMouseOver = useCallback(() => {
    setValue(true)
  }, [])

  const handleMouseOut = useCallback(() => {
    setValue(false)
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (exactly) {
        setValue(e.currentTarget === e.target)
      }
    },
    [exactly],
  )

  useEffect(() => {
    const node = ref.current
    if (node !== null) {
      node.addEventListener('mouseenter', handleMouseOver)
      node.addEventListener('mousemove', handleMouseMove)
      node.addEventListener('mouseleave', handleMouseOut)

      return () => {
        node.removeEventListener('mouseenter', handleMouseOver)
        node.removeEventListener('mousemove', handleMouseMove)
        node.removeEventListener('mouseleave', handleMouseOut)
      }
    }
  }, [handleMouseMove, handleMouseOut, handleMouseOver])

  return [ref, value]
}
