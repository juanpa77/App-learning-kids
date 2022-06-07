// import { useEffect } from 'react'
import useLevel from './useContextLevel'
import useDictaphone from './useDictaphone'
import useProgressBar from './useProgressBar'
import useTimer from './useTimer'
import useWords from './useWords'

const useStart = () => {
  const { listening, resetTranscript, startListen, stopListen, transcript } = useDictaphone()
  const [progress, increaseProgress, slowProgress] = useProgressBar()
  const { gameParameters } = useLevel(progress)
  const seconds = 4 / (gameParameters.speed)

  const [word, nextWord, isOnScreen, offScreen] = useWords()
  const { setIsReady } = useTimer(nextWord, offScreen, seconds)

  /* useEffect(() => {
    if (transcript.includes(word.toLowerCase())) increaseProgress()
    console.log(transcript.includes(word))
    console.log(word)
  }, [transcript, word]) */

  return { isOnScreen, word, setIsReady, listening, resetTranscript, startListen, stopListen, transcript, progress }
}

export default useStart
