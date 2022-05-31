import { useState } from 'react'
import { getMonoSyllable } from '../services/syllablesFactory'
//  add to props timer setTiemout
const useSylablle = (level: number) => {
  const factories = [getMonoSyllable]
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false)
  const [pointCounter, setPointCounter] = useState(0)
  const [syllable, setsyllable] = useState<string[]>(factories[level])
  const offScreen = () => setIsOnScreen(false)

  const nextWord = () => {
    setPointCounter(pointCounter + 1)
    setIsOnScreen(true)
    if (pointCounter > 4) {
      setsyllable(getMonoSyllable)
      setPointCounter(0)
    }
    setTimeout(offScreen, 1000)
    // console.log(word)
  }

  return [syllable[pointCounter], nextWord, isOnScreen] as const
}

export default useSylablle
