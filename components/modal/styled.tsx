import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { colors } from '../../theme/colors'

const Container = styled(motion.div)`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  gap: 8px;
  background-color: rgba(0, 0, 0, 0.75);
  display: grid;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
    & > strong {
      background-color: ${colors.primary};
      padding: 4px;
      border-radius: 4px;
    }
`
export default Container
