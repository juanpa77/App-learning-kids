import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import WrapperCard from '../../components/Card/wrapper'
import { border, colors } from '../../theme/colors'

export const WrapperWords = styled(motion.div)`
display: flex;
height: 94vh;
width: 100%;
border-radius: ${border};
background-color: ${colors.backGround};
`

export const WrapperWord = styled(WrapperCard)`
    
`

export const WordsOptionWrapper = styled(WrapperCard)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`