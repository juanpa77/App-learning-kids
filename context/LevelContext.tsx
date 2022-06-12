import { createContext, ReactNode, useState } from 'react'

type Props = {
  children: ReactNode
}

type gameParameters = {
  level: number
  speed: number,
  secondsTimer: number
}

export type LevelContexType = {
  gameParameters: gameParameters
  levelUp: () => void
  // levelDown: () => void
  selectLevel: (levelSelected: number) => void
  setSecondsTimer: (second: number) => void
  speedUp: () => void
  speedDown: () => void
  resetSpeed: () => void
  setLevel: (level: number) => void
}

const initLevel: LevelContexType = {
  gameParameters: {
    level: 1,
    speed: 1,
    secondsTimer: 4
  },
  levelUp: () => {},
  // levelDown: () => {},
  selectLevel: (levelSelected: number) => {},
  setSecondsTimer: (second: number) => {},
  speedUp: () => {},
  speedDown: () => {},
  resetSpeed: () => {},
  setLevel: (level: number) => {}
}

export const LevelContext = createContext<LevelContexType>(initLevel)

export const LevelProvider = ({ children }: Props) => {
  const [gameParameters, setGameParameters] = useState<gameParameters>({
    level: 1,
    speed: 1,
    secondsTimer: 4
  })

  const setSecondsTimer = (second: number) => setGameParameters({ ...gameParameters, secondsTimer: second })
  const selectLevel = (levelSelected: number) => setGameParameters({ ...gameParameters, level: levelSelected })
  const speedUp = () => setGameParameters({ ...gameParameters, speed: gameParameters.speed + 1 })
  const speedDown = () => setGameParameters({ ...gameParameters, speed: gameParameters.speed - 1 })
  const levelUp = () => setGameParameters({ ...gameParameters, level: gameParameters.level + 1 })
  const setLevel = (level: number) => setGameParameters({ ...gameParameters, level })
  const resetSpeed = () => setGameParameters({ ...gameParameters, speed: 1 })

  const value = {
    gameParameters,
    resetSpeed,
    speedUp,
    speedDown,
    levelUp,
    // levelDown,
    setSecondsTimer,
    selectLevel,
    setLevel
  }

  return (
    <LevelContext.Provider value={value}>
      {children}
    </LevelContext.Provider>
  )
}
