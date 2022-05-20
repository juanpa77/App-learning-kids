/* eslint-disable no-undef */
import Player from '../../Player'
import Steps from '../Steps'
import Container from './styled'

type Props = {
  steps: number[]
  gridArea: string
  rotate?: string
  display?: string
  direction?: string
  children?: JSX.Element | JSX.Element[]
  level: number
}

const Path = ({ steps, gridArea, rotate, display, direction, children, level }: Props) => {
  return (
    <Container gridArea={gridArea} display={display} direction={direction}>
      {steps.map((step, i) => <Steps
        background='linear-gradient(125.71deg, #FC16D7 30.1%, #A1B0FF 81.61%)'
        border='6px solid #FFFFFF'
        key={step}
        rotate={rotate}
      >{i === level && <Player />}</Steps>
      )}
      {children}
    </Container>
  )
}

export default Path
