import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

export const size = css`
  flex-direction: column;
  justify-content: center;
  height: 200px;
  width: 360px;
`
export const WrapperControles = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: 94vh;
  padding: 15px;
  background-color: #ff3eb5;
`

export const WrapperWords = styled(motion.div)`
  display: grid;
  height: 94vh;
  width: 100%;
  background-color: #ff3eb5;
  grid-template-areas: 
    "W W W W CO"
    "C B B X CO";
    grid-template-rows: 7fr 1fr;
  `

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
