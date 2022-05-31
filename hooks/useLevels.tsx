import { useState } from 'react'

const useLevels = () => {
  const [level, setLevel] = useState(0)
  const levelUp = () => setLevel(level + 1)
  const levelDown = () => setLevel(level - 1)
  return [level, levelUp, levelDown] as const
}

export default useLevels
