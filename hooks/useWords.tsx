import { useState } from 'react'
import { getWordBySyllable, factoryWords, getMonoSyllable, factoryRandomSyllable } from '../services/syllablesFactory'
import useLevel from './useContextLevel'

const useWords = () => {
  const { gameParameters } = useLevel()
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false)
  const offScreen = () => setIsOnScreen(false)
  const [word, setWord] = useState('')

  const [syllable, setsyllable] = useState<string[]>(getMonoSyllable)
  const [pointCounter, setPointCounter] = useState(0)

  const nextSyllable = () => {
    setPointCounter(pointCounter + 1)
    if (pointCounter > 3) {
      setsyllable(getMonoSyllable)
      setPointCounter(0)
    }
  }

  const nextWord = () => {
    if (gameParameters.counter < 4) {
      setIsOnScreen(true)
      setWord(syllable[pointCounter])
      nextSyllable()
    }
    if (gameParameters.counter >= 4) {
      setIsOnScreen(true)
      setWord(factoryRandomSyllable)
    }
    // setTimeout(offScreen, 1000)
    if (gameParameters.counter > 6) {
      setIsOnScreen(true)
      setWord(getWordBySyllable)
    }
    if (gameParameters.counter > 9) {
      setIsOnScreen(true)
      setWord(factoryWords)
    }
  }

  return [word, nextWord, isOnScreen, offScreen] as const
}

export default useWords
