import { useAnimationFrame } from 'framer-motion'
import { useRef } from 'react'
import { Back, Buttom, Container, Cube, Front, Left, Right, Top } from './styled'

const Dice = () => {
  const ref = useRef(null)

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200
    const y = (1 + Math.sin(t / 1000)) * -50
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })
  return (
    <Container>
      <Cube ref={ref}>
        <Front>1</Front>
        <Left>2</Left>
        <Right>3</Right>
        <Top>4</Top>
        <Buttom>5</Buttom>
        <Back>6</Back>
      </Cube>
    </Container>
  )
}

export default Dice
