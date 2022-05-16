import { ReactNode } from 'react'
import Container from './styled'

export interface Props {
  children: ReactNode
  isOpenModal: boolean
  text?: string
  className?: string
}

export const Modal = ({ children, isOpenModal, text, className }: Props) => {
  return (
    <>
      {isOpenModal &&
       <Container isOpen={isOpenModal} animate={{ scale: 2 }} transition={{ duration: 0.5 }} >
          {children}
          {text}
      </Container>}
    </>
  )
}
