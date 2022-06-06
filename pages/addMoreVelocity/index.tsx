import { useState } from 'react'
import AppLayout from '../../components/AppLayout'
import Button from '../../components/Button/styled'
import { ShadowBox } from '../../components/ShadowBox/styled'
import { wordOnOf } from '../../components/ShadowBox/variant'
import useTimer from '../../hooks/useTimer'
import { Wrapper, WrapperControles, WrapperWord } from './styled'

export default function AddMoreVelocity () {
  const testWords = ['test', 'words', 'of', 'array', 'for', 'text', 'in', 'two', 'line']
  const [wordIndex, setWordIndex] = useState(0)
  const nextWord = () => setWordIndex(wordIndex + 1)
  const { counter, setIsReady, resetCounter } = useTimer(nextWord, () => {}, 2)

  const start = () => setIsReady(true)
  const resStart = () => {
    resetCounter()
    start()
  }

  const animate = (i: number, isOfOn: boolean) => {
    if (isOfOn) return i === counter ? 'visible' : 'hidden'
    return i <= counter ? 'visible' : 'hidden'
  }

  return (
    <AppLayout>
      <Wrapper>
        <WrapperWord>
        {testWords.map((word, i) => {
          return (
            <ShadowBox
             key={i}
             animate={animate(i, true)}
             variants={wordOnOf}
             >
              {word}
            </ShadowBox>
          )
        })}
        </WrapperWord>
        <WrapperControles>
          <Button onClick={start}>Start</Button>
          <Button onClick={resStart}>restart</Button>
        </WrapperControles>
      </Wrapper>
    </AppLayout>
  )
}
