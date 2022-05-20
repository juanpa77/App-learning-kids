import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

const size = css`
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 360px;
`
export default size

export const Wrapper = styled(motion.div)`
  display: grid;
  height: 100vh;
  width: 100%;
  background-color: #ff3eb5;
  grid-template-areas: 
    "W W W W"
    "C B B X";
    grid-template-rows: 7fr 1fr;
  `
