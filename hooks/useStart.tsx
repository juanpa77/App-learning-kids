import useLevel from './useContextLevel'
// import useTimer from './useTimer'
import useWords from './useWords'

const useStart = () => {
  const { level } = useLevel()
  // const seconds = 4 / (level.velocity + 1)

  const [word, nextWord, isOnScreen, offScreen] = useWords()
  // const { setIsReady } = useTimer(nextWord, offScreen, seconds)

  return { isOnScreen, word, nextWord /* setIsReady */ }
}

export default useStart
