import { useState } from 'react'
import useTimer from './useTimer'
import useWords from './useWords'

const useLevels = () => {
  const [level, setLevel] = useState(5)
  const [word, nextWord, isOnScreen] = useWords()
  const { setIsReady, isReady } = useTimer(nextWord, level)

  return { isOnScreen, word, setLevel, nextWord, setIsReady, isReady }
}

export default useLevels
