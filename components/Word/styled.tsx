import styled from '@emotion/styled'
import { motion } from 'framer-motion'

type WrapperWord = {
  area: string
}
const Word = styled.strong`
  color: ${props => props.color};
  font-size: 23px;
`
export default Word

export const Wrapper = styled(motion.div)`
  grid-area: ${(porps: WrapperWord) => porps.area};
  background-color: ${(props) => props.color};
  width: max-content;
  padding: 4px;
  height: 33px;
  border-radius: 10px;
  padding: 2px;
`
