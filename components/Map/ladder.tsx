import LadderImg from 'next/image'
import { LadderWrapper } from './styled'

const Ladder = () => {
  return (
    <LadderWrapper colum={6} row={5} >
      <LadderImg src={'/ladder.png'} height='210px' width='110px'/>
    </LadderWrapper>
  )
}

export default Ladder
