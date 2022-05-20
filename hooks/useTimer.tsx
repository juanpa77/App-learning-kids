import { useEffect, useState } from 'react'

const useTimer = (nexAction: ()=> void, stopTimer: number) => {
  const [counter, setCounter] = useState(0)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (isReady) {
      nexAction()
      if (counter > stopTimer) setCounter(0)
      const interval = setInterval(() => setCounter(counter + 1), 3000)
      return () => clearInterval(interval)
    }
  }, [counter, isReady])
  return { counter, isReady, setIsReady }
}

export default useTimer
