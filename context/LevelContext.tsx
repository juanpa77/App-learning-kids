import { createContext, ReactNode, useState } from 'react'

type Props = {
  children: ReactNode
}

type Level = {
  counter: number,
  velocity: number,
  secondsTimer: number
}

export type LevelContexType = {
  level: Level
  levelUp: () => void
  levelDown: () => void
  selectLevel: (levelSelected: number) => void
}

const initLevel: LevelContexType = {
  level: {
    counter: 1,
    velocity: 1,
    secondsTimer: 4
  },
  levelUp: () => {},
  levelDown: () => {},
  selectLevel: () => {}
}

export const LevelContext = createContext<LevelContexType>(initLevel)

export const LevelProvider = ({ children }: Props) => {
  const [level, setLevel] = useState<Level>({
    counter: 1,
    velocity: 1,
    secondsTimer: 4
  })

  const setSecondsTimer = (second: number) => setLevel({ ...level, secondsTimer: second })

  const selectLevel = (levelSelected: number) => setLevel({ ...level, counter: levelSelected })

  const levelUp = () => setLevel({
    ...level,
    counter: level.counter + 1,
    velocity: level.velocity + 1
  })

  const levelDown = () => setLevel({
    ...level,
    counter: level.counter - 1,
    velocity: level.velocity - 1
  })

  const value = {
    level,
    levelUp,
    levelDown,
    setSecondsTimer,
    selectLevel
  }

  return (
    <LevelContext.Provider value={value}>
      {children}
    </LevelContext.Provider>
  )
}

// export default ContextLevel
