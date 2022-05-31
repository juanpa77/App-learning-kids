
import AppLayout from '../../components/AppLayout'
import Button from '../../components/Button/styled'
import Card from '../../components/Card/styled'
import { Modal } from '../../components/modal'
import { useModal } from '../../hooks/useModal'
import { WrapperWords, WrapperControles, Wrapper } from './styled'
import ArrowRight from '../../components/Button/arrowRight'
import Portal from '../../components/Portal'
import MoleWord from '../../components/Word'
import SelectLevel from '../../components/Select'
import { useSelect } from '../../hooks/useSelect'
import useStart from '../../hooks/useStart'
import useLevels from '../../hooks/useLevels'

export default function LearnToRead () {
  const [isOpenModal,, closeModal] = useModal(true)
  const { handleOptions } = useSelect()
  const [level, levelUp, levelDown] = useLevels()
  const { nextWord, setIsReady, isReady, word, isOnScreen } = useStart(level)

  const start = () => {
    console.log(level)
    closeModal()
    setIsReady(true)
  }

  return (
    <AppLayout>
      <Wrapper>

      <WrapperWords>
        {isOpenModal ||
        (
          <MoleWord
          area='W'
          word={word}
          isOnScreen={isOnScreen}
          ></MoleWord>
        )}
        {isReady
          ? ''
          : <Button onClick={nextWord} area='b' >
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
      </WrapperWords>
      <WrapperControles>
        <Button onClick={levelUp} >
          +
        </Button>
        <Button onClick={levelDown} >
          -
        </Button>
      </WrapperControles>
      {/* wrapper controls and counter */}
      </Wrapper>
    </AppLayout>
  )
}
