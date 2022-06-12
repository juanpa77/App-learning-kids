import AppLayout from '../../components/AppLayout'
import MoleWord from '../../components/Word'
import useWords from '../../hooks/useWords'
import { WrapperWords } from '../learnToRead/styled'

export default function ChooseCorrectWord () {
  const optionNumber = 4

  const [word, nextWord, isOnScreen, offScreen] = useWords()

  return (
    <AppLayout>
      <WrapperWords>
        {[...Array(optionNumber)].map((i) => {
          return (
            <MoleWord key={i} word={''} area={word} isOnScreen={true} />
          )
        })}
      </WrapperWords>
    </AppLayout>
  )
}
