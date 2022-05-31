import { useState } from 'react'
import AppLayout from '../../components/AppLayout'
import { ShadowBox } from '../../components/ShadowBox/styled'
import { wordOnOf } from '../../components/ShadowBox/variant'
import useTimer from '../../hooks/useTimer'
import { Wrapper } from './styled'

export default function AddMoreVelocity () {
  const testWords = ['test', 'words', 'for', 'text']
  const [wordIndex, setWordIndex] = useState(0)
  const nextWord = () => setWordIndex(wordIndex + 1)
  const { counter, isReady, setIsReady} = useTimer(nextWord, testWords.length)

  return (
    <AppLayout>
      <Wrapper>
        {testWords.map((word, i) => {
          return (
            <ShadowBox
             key={i}
             animate={i === counter ? 'visible' : 'hidden' }
             variants={wordOnOf}
             >
              {word}
            </ShadowBox>
          )
        })}
      </Wrapper>
    </AppLayout>
  )
}
