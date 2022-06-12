import { useEffect, useState } from 'react'
import useLevel from './useContextLevel'
import useDictaphone from './useDictaphone'
import useProgressBar from './useProgressBar'
import useTimer from './useTimer'
import useWords from './useWords'

const useStart = () => {
  const { listening, resetTranscript, startListen, stopListen, transcript } = useDictaphone()
  const [progress, increaseProgress, slowProgress, resetProgress] = useProgressBar()
  const { gameParameters, speedUp } = useLevel(progress)
  const seconds = 4 / (gameParameters.speed)

  const [word, words, nextWord, isOnScreen, offScreen] = useWords()

  const { setIsReady } = useTimer(nextWord, offScreen, seconds)

  const areEqual = () => {
    // if (word.toLowerCase().slice(-1) === transcript.slice(-1)) return true
  }

  /* useEffect(() => {
    if (progress >= 1) {
      resetProgress()
      speedUp()
    }
  }, [progress])

  useEffect(() => {
    areEqual()
      ? increaseProgress()
      : slowProgress()
    console.log(words)
    resetTranscript()
  }, [transcript]) */

  return { isOnScreen, word, setIsReady, listening, resetTranscript, startListen, stopListen, transcript, progress }
}

export default useStart
