import Wrapper, { Progress } from './styled'

type Porps = {
  progress: number
}

const ProgressBar = ({ progress }: Porps) => {
  return (
    <Wrapper>
      <Progress
      animate={{ scaleX: progress }}
      transition={{ duration: 0.2 }}
      />
    </Wrapper>
  )
}

export default ProgressBar
