import { useEffect, useState } from 'react'

const useTimer = (nexAction: ()=> void, offScreen: ()=> void, interval: number) => {
  const [counter, setCounter] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const resetCounter = () => setCounter(0)

  const seconds = interval * 1000
  const secondOffScreen = (interval / 2) * 1000

  useEffect(() => {
    if (isReady) {
      nexAction()
      if (counter > 4) setCounter(0)
      const interval = setInterval(() => {
        setCounter(counter + 1)
        setTimeout(offScreen, secondOffScreen)
      }, seconds)
      return () => clearInterval(interval)
    }
  }, [counter, isReady])

  return { counter, setIsReady, resetCounter }
}

export default useTimer
