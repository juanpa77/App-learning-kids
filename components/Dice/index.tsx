import { useAnimationFrame } from 'framer-motion'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Back, Buttom, Container, Cube, Front, Left, Right, Top } from './styled'

export type StartHandle = {
  togglePlay: () => void
  resultRollDice: number
  play: boolean
}
type Props = {}
const Dice = forwardRef<StartHandle, Props>((props, ref) => {
  const [position, setPosition] = useState({ y: 180, x: -80 })
  const [play, setPlay] = useState(true)
  const togglePlay = () => setPlay(!play)
  const [numberDice, setNumberDice] = useState(0)

  useImperativeHandle(ref, () => {
    // console.log(play)
    return {
      togglePlay,
      resultRollDice: numberDice,
      play
    }
  })

  useEffect(() => {
    if (position.x < -166) {
      setNumberDice(1)
    }
    if (position.x < -332) {
      setNumberDice(2)
    }
    if (position.x < -498) {
      setNumberDice(3)
    }
    if (position.x < -664) {
      setNumberDice(4)
    }
    if (position.x < -830) {
      setNumberDice(5)
    }
    if (position.x < -999) {
      setNumberDice(6)
    }
    // console.log(numberDice)
  }, [numberDice, position.x])

  const refCube = useRef(null)
  const animate = (t: number) => {
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

  useAnimationFrame(animate)

  return (
    <Container>
      <Cube ref={refCube}>
        <Front>1</Front>
        <Left>2</Left>
        <Right>3</Right>
        <Top>4</Top>
        <Buttom>5</Buttom>
        <Back>6</Back>
      </Cube>
    </Container>
  )
})

Dice.displayName = 'Dice'

export default Dice
