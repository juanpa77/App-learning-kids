import { useState } from 'react'

const useProgressBar = () => {
  const [progress, setProgress] = useState(0)

  const increaseProgress = () => setProgress(progress + 0.02)
  const slowProgress = () => setProgress(progress - 0.2)

  return [progress, increaseProgress, slowProgress] as const
}

export default useProgressBar
