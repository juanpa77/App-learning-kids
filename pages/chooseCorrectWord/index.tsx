import AppLayout from '../../components/AppLayout'
import MoleWord from '../../components/Word'
import { WrapperWords } from '../learnToRead/styled'

export default function index () {
  const optionNumber = 4

  return (
    <AppLayout>
      <WrapperWords>
        {[...Array(optionNumber)].map((i) => {
          return (
            <MoleWord key={i} word={''} area={''} isOnScreen={false} />
          )
        })}
      </WrapperWords>
    </AppLayout>
  )
}
