import { createContext, ReactNode, useState } from 'react'

type Props = {
  children: ReactNode
}

type gameParameters = {
  level: number
  counter: number,
  speed: number,
  secondsTimer: number
}

export type LevelContexType = {
  gameParameters: gameParameters
  levelUp: () => void
  levelDown: () => void
  selectLevel: (levelSelected: number) => void
  setSecondsTimer: (second: number) => void
  counterUp: () => void
  counterDown: () => void
  velocityUp: () => void
  velocityDown: () => void
  resetSpeed: () => void
  setLevel: (level: number) => void
}

const initLevel: LevelContexType = {
  gameParameters: {
    level: 1,
    counter: 1,
    speed: 1,
    secondsTimer: 4
  },
  levelUp: () => {},
  levelDown: () => {},
  selectLevel: (levelSelected: number) => {},
  setSecondsTimer: (second: number) => {},
  counterUp: () => {},
  counterDown: () => {},
  velocityUp: () => {},
  velocityDown: () => {},
  resetSpeed: () => {},
  setLevel: (level: number) => {}
}

export const LevelContext = createContext<LevelContexType>(initLevel)

export const LevelProvider = ({ children }: Props) => {
  const [gameParameters, setGameParameters] = useState<gameParameters>({
    level: 1,
    counter: 1,
    speed: 1,
    secondsTimer: 4
  })

  const setSecondsTimer = (second: number) => setGameParameters({ ...gameParameters, secondsTimer: second })
  const selectLevel = (levelSelected: number) => setGameParameters({ ...gameParameters, counter: levelSelected })
  const counterUp = () => setGameParameters({ ...gameParameters, counter: gameParameters.counter + 1 })
  const counterDown = () => setGameParameters({ ...gameParameters, counter: gameParameters.counter - 1 })
  const velocityUp = () => setGameParameters({ ...gameParameters, counter: gameParameters.speed + 1 })
  const velocityDown = () => setGameParameters({ ...gameParameters, counter: gameParameters.speed - 1 })
  const setLevel = (level: number) => setGameParameters({ ...gameParameters, level: level })
  const resetSpeed = () => setGameParameters({ ...gameParameters, speed: 1 })

  const levelUp = () => setGameParameters({
    ...gameParameters,
    counter: gameParameters.counter + 1,
    speed: gameParameters.speed + 1
  })

  const levelDown = () => setGameParameters({
    ...gameParameters,
    counter: gameParameters.counter - 1,
    speed: gameParameters.speed - 1
  })

  const value = {
    gameParameters,
    counterUp,
    counterDown,
    resetSpeed,
    velocityUp,
    velocityDown,
    levelUp,
    levelDown,
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
