import styled from '@emotion/styled'
import { motion } from 'framer-motion'

type ModalProps = {
  isOpen: boolean
}

const Container = styled(motion.div)<ModalProps>`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: ${(props: ModalProps) => props.isOpen ? 'grid' : 'none'};
  align-items: center;
  justify-content: center;
`
export default Container
