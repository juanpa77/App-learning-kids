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
    if (gameParameters.counter < 5) {
      setIsOnScreen(true)
      setWord(syllable[pointCounter].toLowerCase())
      nextSyllable()
      // setWord(word.toLowerCase())
    }
    if (gameParameters.counter > 4) {
      setIsOnScreen(true)
      setWord(factoryRandomSyllable().toLowerCase())
    }
    // setTimeout(offScreen, 1000)
    if (gameParameters.counter > 7) {
      setIsOnScreen(true)
      setWord(getWordBySyllable().toLowerCase())
    }
    if (gameParameters.counter > 12) {
      setIsOnScreen(true)
      setWord(factoryWords)
      // setWord(word.toLowerCase())
    }
  }

  return [word, nextWord, isOnScreen, offScreen] as const
}

export default useWords
