import { useState } from 'react'
import { getWordBySyllable, factoryWords, getMonoSyllable, factoryRandomSyllable } from '../services/syllablesFactory'
import useLevel from './useContextLevel'

const useWords = () => {
  const { level } = useLevel()
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false)
  const offScreen = () => setIsOnScreen(false)
  const [word, setWord] = useState('')

  const [syllable, setsyllable] = useState<string[]>(getMonoSyllable)
  const [pointCounter, setPointCounter] = useState(0)

  const nextSyllable = () => {
    setPointCounter(pointCounter + 1)
    if (pointCounter > 4) {
      setsyllable(getMonoSyllable)
      setPointCounter(0)
    }
  }

  const nextWord = () => {
    if (level.counter <= 4) {
      setIsOnScreen(true)
      setWord(syllable[pointCounter])
      nextSyllable()
    }
    if (level.counter > 4) {
      // resetVelocity()
      setIsOnScreen(true)
      setWord(factoryRandomSyllable)
    }
    // setTimeout(offScreen, 1000)
    if (level.counter > 6) {
      setIsOnScreen(true)
      setWord(getWordBySyllable)
    }
    if (level.counter > 9) {
      setIsOnScreen(true)
      setWord(factoryWords)
    }
  }

  return [word, nextWord, isOnScreen, offScreen] as const
}

export default useWords
