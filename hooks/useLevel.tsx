import { useEffect, useState } from 'react'
import useSyllables from './useSyllables'
import useTimer from './useTimer'
import { syllableGenerator, bySyllableGenerator } from '../services/syllablesFactory'

interface Props {
  setSyllable: (syllable: string) => void
  isOpenModal?: boolean
  openModal: () => void
  closeModal: () => void
}

const useLevel = ({ setSyllable, openModal, closeModal } : Props) => {
  const [level, setLevel] = useState(5)
  const [counterT, setCountert] = useState(0)
  const { syllables, index, handell, setSyllables } = useSyllables(syllableGenerator)
  const { isReady, setIsReady } = useTimer(handell, index)
  const start = () => {
    closeModal()
  }

  const nexLevel = () => {
    setLevel(level + 5)
    setIsReady(true)
    closeModal()
  }

  const repitLevel = () => {
    closeModal()
    // console.log()
  }

  useEffect(() => {
    setSyllable(syllables[index])
  }, [isReady, syllables, index])

  useEffect(() => {
    setCountert(counterT + 1)
    // console.log(counterT)
  }, [index])

  useEffect(() => {
    if (counterT > level) {
      setIsReady(false)
      openModal()
    }
    // console.log(isReady, counterT, level)
  })

  return { isReady, handell, nexLevel, start }
}

export default useLevel
