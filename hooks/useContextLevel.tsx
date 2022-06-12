
import { useContext, useEffect } from 'react'
import { LevelContext } from '../context/LevelContext'

const useLevel = (progress?: number) => {
  const { gameParameters, selectLevel, resetSpeed, setLevel } = useContext(LevelContext)

  useEffect(() => resetSpeed(), [gameParameters.level])

  useEffect(() => {
    if (gameParameters.speed === 0) resetSpeed()
    console.log(gameParameters)
    const progressBar = progress * 100
    if (gameParameters.counter === 4) {
      setLevel(2)
    }
    if (gameParameters.counter === 8) {
      setLevel(3)
    }
    // setTimeout(offScreen, 1000)
    if (gameParameters.counter === 12) {
      setLevel(4)
    }
    if (gameParameters.counter === 16) {
      setLevel(5)
    }
    console.log(progressBar)
  }, [gameParameters.counter])

  return { gameParameters, selectLevel, resetSpeed }
}

export default useLevel
