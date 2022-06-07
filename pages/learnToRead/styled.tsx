import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { colors } from '../../theme/colors'

const border = '9px'

export const size = css`
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 360px;
`
export const WrapperControles = styled.div`
  display: flex;
  grid-area: C;
  flex-direction: column;
  align-self: center;
  justify-content: space-evenly;
  height: 94vh;
  padding: 15px;
  border-radius: ${border};
  background-color: ${colors.backGround};
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 5px;
    border-radius: ${border};
    background-color: ${colors.darkTransparency};
    & > Button {
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 39px;
  }
  }
`

export const WrapperWords = styled(motion.div)`
  display: grid;
  grid-area: WW;
  height: 94vh;
  width: 100%;
  border-radius: ${border};
  background-color: ${colors.backGround};
  grid-template-areas: 
    "W W W W CO"
    "C B B X CO";
    grid-template-rows: 7fr 1fr;
  `

export const Wrapper = styled('div')`
  display: grid;
  grid-template-areas: 
    "SP PB C"
    "SP WW C"
  ;
  grid-template-columns: 1fr 6fr 1fr;
  gap: 10px;
`
