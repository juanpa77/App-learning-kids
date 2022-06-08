
import { useContext, useEffect } from 'react'
import { LevelContext } from '../context/LevelContext'

const useLevel = (progress?: number) => {
  const { gameParameters, levelUp, speedDown, speedUp, selectLevel, resetSpeed } = useContext(LevelContext)

  useEffect(() => resetSpeed(), [gameParameters.level])

  useEffect(() => {
    if (gameParameters.speed === 0) resetSpeed()
    console.log(gameParameters)
    // const progressBar = progress * 100
    if (gameParameters.speed > 3) {
      levelUp()
    }
    // console.log(progressBar)
  }, [gameParameters.speed])

  return { gameParameters, speedDown, speedUp, selectLevel, resetSpeed }
}

export default useLevel
