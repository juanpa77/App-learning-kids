import { ReactNode } from 'react'
import Container from './styled'

export interface Props {
  children: ReactNode
  isOpenModal: boolean
  text?: string
}

export const Modal = ({ children, isOpenModal, text }: Props) => {
  return (
    <>
    {isOpenModal &&
    <Container animate={{ scale: 2 }} transition={{ duration: 0.5 }} >
      {children}
      {text}
    </Container>}
    </>
  )
}
