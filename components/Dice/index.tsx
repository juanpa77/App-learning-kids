import { useAnimationFrame } from 'framer-motion'
import { MutableRefObject, useRef } from 'react'
import { Back, Buttom, Container, Cube, Front, Left, Right, Top } from './styled'

type Props = {
  rotateDice: (t: number, refCube: MutableRefObject<any>) => void
}

export type StartHandle = {
  togglePlay: () => void
  resultRollDice: number
}

const Dice = ({ rotateDice }: Props) => {
  const refCube = useRef(null)
  useAnimationFrame((t) => rotateDice(t, refCube))

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
}

export default Dice
