import AppLayout from '../../components/AppLayout'
import Button from '../../components/Button/styled'
import MoleWord from '../../components/Word'
import useWords from '../../hooks/useWords'
import randomNumber from '../../services/math'
import { WordsOptionWrapper, WrapperWord, WrapperWords } from '../chooseCorrectWord/styled'
import { MouseEvent } from 'react'
import { showOption } from '../../components/Word/variants'
import WrapperCard from '../../components/Card/wrapper'

export default function ChooseCorrectWord () {
  const { words, newWords, isOnScreen, offScreen } = useWords()
  const optionNumber = 5
  const word = words[randomNumber(words.length)]
  const isRightChoice = (evnt: MouseEvent<HTMLDivElement>) => {
    if (evnt.currentTarget.textContent === word) newWords()
    // return false
  }

  const start = () => {
    console.log(words, isRightChoice)
    newWords()
    // setWord(words[randomNumber(words.length)])
  }

  return (
    <AppLayout>
      <WrapperWords>
        <WrapperWord width='70%'>
          <MoleWord
            word={word}
            area={'W'}
            isOnScreen={true}
            variantAnimate={showOption}
          />
        </WrapperWord>
        <WordsOptionWrapper color='#FFFFFF80' width='70%'>
          {[...Array(optionNumber)].map((option, i) => {
            return (
              <MoleWord
                key={i}
                word={words[i]}
                area={'O'}
                isOnScreen={true}
                onClick={isRightChoice}
                variantAnimate={showOption}
                />
            )
          })}
        </WordsOptionWrapper>
        <Button onClick={start}>Test</Button>
      </WrapperWords>
    </AppLayout>
  )
}
