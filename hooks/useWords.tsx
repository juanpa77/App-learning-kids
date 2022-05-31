import { useState } from 'react'
import { factoryWords, getMonoSyllable } from '../services/syllablesFactory'

const useWords = (level: number) => {
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
    if (level <= 1) {
      setIsOnScreen(true)
      setWord(syllable[pointCounter])
      nextSyllable()
    }
    if (level > 1) {
      setIsOnScreen(true)
      setWord(factoryWords)
    }
    setTimeout(offScreen, 1500)
    console.log(level)
  }

  return [word, nextWord, isOnScreen] as const
}

export default useWords
