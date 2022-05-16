import { useEffect, useState } from 'react'

const useTimer = (callback: () => void, stopTimer: number) => {
  const [counter, setCounter] = useState(0)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (isReady) {
      callback()
      if (counter > stopTimer) setCounter(0)
      const interval = setInterval(() => setCounter(counter + 1), 1000)
      return () => clearInterval(interval)
    }
  }, [counter, isReady])
  return { counter, isReady, setIsReady }
}

export default useTimer
