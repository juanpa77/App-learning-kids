import { useState } from 'react'

const useProgressBar = () => {
  const [progress, setProgress] = useState(0)

  const increaseProgress = () => setProgress(progress + 0.25)
  const slowProgress = () => setProgress(progress - 0.01)
  const resetProgress = () => setProgress(0)

  return [progress, increaseProgress, slowProgress, resetProgress] as const
}

export default useProgressBar
