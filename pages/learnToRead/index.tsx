
import AppLayout from '../../components/AppLayout'
import Button from '../../components/Button/styled'
import Card from '../../components/Card/styled'
import { Modal } from '../../components/modal'
import { useModal } from '../../hooks/useModal'
import { Wrapper } from './styled'
import ArrowRight from '../../components/Button/arrowRight'
import Portal from '../../components/Portal'
import MoleWord from '../../components/Word'
import SelectLevel from '../../components/Select'
import { useSelect } from '../../hooks/useSelect'
import useStart from '../../hooks/useStart'
import useLevels from '../../hooks/useLevels'

export default function LearnToRead () {
  const [isOpenModal, openModal, closeModal] = useModal(true)
  const { option, handleOptions } = useSelect()
  const { nextWord, setIsReady, setLevel, isReady, word, isOnScreen } = useStart()
  const [level, handleLevel] = useLevels()
  const start = () => {
    console.log(word)
    closeModal()
    setIsReady(true)
  }

  return (
    <AppLayout>
      <Wrapper>
        {isOpenModal || (
          <MoleWord
          area='W'
          word={word}
          isOnScreen={isOnScreen}
          ></MoleWord>
        )}
        { isReady
          ? ''
          : <Button onClick={nextWord} >
              <ArrowRight />
            </Button>
        }
        <Portal area={'C'} />
        <Portal area={'X'} />
        {<Modal isOpenModal={isOpenModal} >
          <Card color='#BF5AF2'>
            <SelectLevel options={['1', '2']} onChange={handleOptions} />
            <Button onClick={start}>
              repit
            </Button>
            <Button onClick={start}>
              sigiente
            </Button>
            <Button onClick={start}>
              <ArrowRight />
            </Button>
          </Card>
        </Modal>}
      </Wrapper>
    </AppLayout>
  )
}
