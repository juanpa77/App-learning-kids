import Steps from '../Steps'
import Container from './styled'

type Props = {
  steps: number[]
  gridArea: string
  rotate?: string
  display?: string
  direction?: string
}

const Path = ({ steps, gridArea, rotate, display, direction }: Props) => {
  return (
    <Container gridArea={gridArea} display={display} direction={direction}>
      {steps.map((step, i) => <Steps
      background='linear-gradient(125.71deg, #FC16D7 30.1%, #A1B0FF 81.61%)'
      border='6px solid #FFFFFF'
      key={step}
      rotate={rotate}
      />)}
    </Container>
  )
}

export default Path
