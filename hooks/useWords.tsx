import { useState } from 'react'
import randomNumber from '../services/math'
import { getWordBySyllable, factoryWords, getMonoSyllable, factoryRandomSyllable } from '../services/syllablesFactory'
import useLevel from './useContextLevel'

const useWords = () => {
  const { gameParameters } = useLevel()
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false)
  const offScreen = () => setIsOnScreen(false)
  const [words, setWords] = useState<string[]>(getMonoSyllable)
  const [word, setWord] = useState(words[randomNumber(words.length)])
  const [indexWords, setindexWords] = useState(0)
  // const [syllable, setsyllable] = useState<string[]>(getMonoSyllable)

  /* const nextSyllable = () => {
    setPointCounter(pointCounter + 1)
    if (pointCounter > 3) {
      setsyllable(getMonoSyllable)
      setPointCounter(0)
    }
  } */
  const nextWord = () => {
    if (indexWords > 3) {
      newWords()
      setindexWords(0)
    }
    setWord(words[indexWords])
    setindexWords(indexWords + 1)
    console.log(word, indexWords)
  }

  const newWords = () => {
    if (gameParameters.level === 1) {
      setIsOnScreen(true)
      setWords(getMonoSyllable)
      // nextSyllable()
    }
    if (gameParameters.level === 2) {
      setIsOnScreen(true)
      setWords(factoryRandomSyllable)
    }
    // setTimeout(offScreen, 1000)
    if (gameParameters.level === 3) {
      setIsOnScreen(true)
      setWords(getWordBySyllable)
    }
    if (gameParameters.level === 4) {
      setIsOnScreen(true)
      setWords(factoryWords)
    }
  }

  return { word, words, newWords, nextWord, isOnScreen, offScreen }
}

export default useWords
