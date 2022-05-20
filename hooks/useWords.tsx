import { useState } from 'react'
import { factoryWords } from '../services/syllablesFactory'

const useWords = () => {
  const [word, setWord] = useState(factoryWords())
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false)
  const offScreen = () => setIsOnScreen(false)
  const nextWord = () => {
    setWord(factoryWords)
    setIsOnScreen(true)
    setTimeout(offScreen, 1500)
  }
  return [word, nextWord, isOnScreen] as const
}

export default useWords
