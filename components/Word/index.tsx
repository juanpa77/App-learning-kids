import { MouseEvent } from 'react'
import { randomNumberbetween } from '../../services/math'
import Word, { Wrapper } from './styled'
import { wordAnimate } from './variants'

type Props = {
  word: string
  area: string
  x?: number
  y?: number
  isOnScreen: boolean
  variantAnimate?: any
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

const MoleWord = ({ word, area, x, y, isOnScreen, onClick, variantAnimate }: Props) => {
  return (
    <Wrapper area={area} color='#7d14a2'
    custom={[randomNumberbetween(50, 500), randomNumberbetween(400, 100)]}
    initial={'initial'}
    animate= {isOnScreen ? 'show' : 'hident'}
    variants={variantAnimate}
    onClick={onClick}
    >
      <Word>{word}</Word>
    </Wrapper>
  )
}

export default MoleWord
