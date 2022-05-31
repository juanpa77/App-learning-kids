import { useState } from 'react'
import useTimer from './useTimer'
import useWords from './useWords'

const useStart = (level: number) => {
  const [stop, setStop] = useState(5)
  const [word, nextWord, isOnScreen] = useWords(level)
  const { setIsReady, isReady } = useTimer(nextWord, stop)

  return { isOnScreen, word, setStop, nextWord, setIsReady, isReady }
}

export default useStart
