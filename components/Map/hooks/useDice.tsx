import { MutableRefObject, useEffect, useState } from 'react'
import useTimer from '../../../hooks/useTimer'

const useDice = () => {
  const { counter, setIsReady } = useTimer({ interval: 0.1, nexAction: () => {} })
  const [play, setPlay] = useState(false)
  const [position, setPosition] = useState({ y: 180, x: -80 })
  const [resultRollDice, setResultRollDice] = useState(0)
  // const resultRollDice = 2
  const togglePlay = () => setPlay(!play)

  const rotateDice = (t: number, refCube: MutableRefObject<any>) => {
    setIsReady(true)

    play
      ? setPosition({
        y: Math.sin(t / 500) * 200,
        x: (1 + Math.sin(t / 700)) * -500
      })
      : setPosition({
        y: position.y,
        x: position.x
      })
    refCube.current.style.transform = `translateY(${position.y}px) rotateX(${position.x}deg) rotateY(${position.y}deg)`
  }

  useEffect(() => {
    if (position.x < -166) {
      setResultRollDice(1)
    }
    if (position.x < -332) {
      setResultRollDice(2)
    }
    if (position.x < -498) {
      setResultRollDice(3)
    }
    if (position.x < -664) {
      setResultRollDice(4)
    }
    if (position.x < -830) {
      setResultRollDice(5)
    }
    if (position.x < -999) {
      setResultRollDice(6)
    }
  }, [counter])

  return {
    togglePlay,
    rotateDice,
    resultRollDice
  }
}

export default useDice
