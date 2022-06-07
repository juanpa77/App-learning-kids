import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { colors } from '../../theme/colors'

const Wrapper = styled(motion.div)`
    grid-area: PB;
    justify-self: center;
    height: 60px;
    width: 70%;
    border-radius: 100px;
    background-color: ${colors.backGround};
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Progress = styled(motion.div)`
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  border-radius: 100px;
  background-color: black;
  box-shadow: 0 0px 40px 5px #fff;
  transform-origin: 0 0;
`

export default Wrapper
