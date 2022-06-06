
import AppLayout from '../../components/AppLayout'
import Button from '../../components/Button/styled'
import { Modal } from '../../components/modal'
import { useModal } from '../../hooks/useModal'
import { WrapperWords, WrapperControles, Wrapper } from './styled'
import ArrowRight from '../../components/Button/arrowRight'
import Portal from '../../components/Portal'
import MoleWord from '../../components/Word'
import SelectLevel from '../../components/Select'
import { useSelect } from '../../hooks/useSelect'
import useStart from '../../hooks/useStart'
import { LevelProvider } from '../../context/LevelContext'
import useLevel from '../../hooks/useContextLevel'
import { useEffect } from 'react'
import Dictaphone from '../../components/SpeechRocognition'
import useDictaphone from '../../hooks/useDictaphone'

/**
 *  Agregar efecto de destello corazones emoji icon, si es true el resultado de la comparacion caso contrario destello de dedito
 * hacia abajo o cruz o aparicion de memes de fondo probar ambas animaciones
 *  Agregar barra de progreso en base a aciertos
 */

export default function LearnToRead () {
  const { listening, resetTranscript, startListen, stopListen, transcript } = useDictaphone()
  const [isOpenModal, openModal, closeModal] = useModal(true)
  const { handleOptions, option } = useSelect()
  const { level, levelDown, levelUp, selectLevel } = useLevel()
  const { /* setIsReady, */ nextWord, word, isOnScreen } = useStart()

  useEffect(() => {
    if (transcript.includes(word.toLowerCase())) nextWord()
    console.log(transcript.includes(word))
    console.log(word)
  }, [transcript, word])

  useEffect(() => {
    selectLevel(parseInt(option))
  }, [option])

  const pause = () => {
    openModal()
    // setIsReady(false)
  }

  const start = () => {
    console.log(option)
    closeModal()
    // setIsReady(true)
  }

  return (
    <LevelProvider>
      <AppLayout>
        <Wrapper>
        <Dictaphone
          transcript={transcript}
          listening={listening}
          resetTranscript={resetTranscript}
          startListening={startListen}
          stoptListening={stopListen}
        />
          <WrapperWords>
            {isOpenModal ||
            (
              <MoleWord
              area='W'
              word={word}
              isOnScreen={isOnScreen}
              ></MoleWord>
            )}
            <Portal area={'C'} />
            <Portal area={'X'} />
            {<Modal isOpenModal={isOpenModal} >
              <strong>Elija un nivel  </strong>
                <SelectLevel options={['1', '2']} onChange={handleOptions} />
                <Button onClick={start}>
                  jugar
                  <ArrowRight />
                </Button>
            </Modal>}
          </WrapperWords>
          <WrapperControles>
            <Button onClick={pause}>pausa</Button>
            <div>
              <h3>Nivel</h3>
              <Button>{level.counter}</Button>
            </div>
            <div>
              <Button onClick={levelUp} >
                +
              </Button>
              <Button onClick={levelDown} >
                -
              </Button>
            </div>
          </WrapperControles>
        </Wrapper>
      </AppLayout>
    </LevelProvider>
  )
}
