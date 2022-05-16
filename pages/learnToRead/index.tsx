
import AppLayout from '../../components/AppLayout'
import Button from '../../components/Button/styled'
import Card from '../../components/Card/styled'
import { Modal } from '../../components/modal'
import { useModal } from '../../hooks/useModal'
import size from './styled'
import ArrowRight from '../../components/Button/arrowRight'
import Word from '../../components/Word/styled'
import useLevel from '../../hooks/useLevel'
import { useState } from 'react'
import { motion } from "framer-motion";

export default function LearnToRead (props) {
  const [isOpenModal, openModal, closeModal] = useModal(true)
  const [syllable, setSyllable] = useState('')

  const { isReady, handell, nexLevel, start } = useLevel({ setSyllable, openModal, isOpenModal, closeModal })
  /* const start = () => {
    closeModal()
    nexLevel()
  } */

  return (
    <AppLayout>
      <Card color='#FF2D55' css={size}>
        <Word>{syllable}</Word>
        {isReady
          ? ''
          : <Button onClick={handell} >
              <ArrowRight />
            </Button>
        }
      </Card>
      <Modal isOpenModal={isOpenModal} >
        <Card color='#BF5AF2'>
          {/* <h1>HOla</h1> */}
          <Button onClick={start}>
            repit
          </Button>
          <Button onClick={nexLevel}>
            sigiente
          </Button>
          <Button onClick={start}>
            <ArrowRight />
          </Button>
        </Card>
      </Modal>
    </AppLayout>
  )
}
