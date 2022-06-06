import { useEffect, useState } from 'react'

export interface Level {
  counter: number
  velocity: number
}

const useLevels = () => {
  const [level, setLevel] = useState({
    counter: 1,
    velocity: 0
  } as Level)

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
  const resetVelocity = () => setLevel({ ...level, velocity: 1 })

  useEffect(() => {
    if (level.velocity > 3) resetVelocity()
  }, [level.velocity])

  return [level, levelUp, levelDown, resetVelocity] as const
}

export default useLevels
