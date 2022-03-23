import React, { useEffect } from 'react'

export const useEffectOnce = <T = unknown>(effect: React.EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [])
}
