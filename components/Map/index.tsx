import { useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useModal } from '../../hooks/useModal'
import { newMap } from '../../services/arrayGenerator'
import Button from '../Button/styled'
import WrapperCard from '../Card/wrapper'
import Dice, { StartHandle } from '../Dice'
import { Modal } from '../modal'
import Player from '../Player'
import Background from './background'
import Ladder from './ladder'
import MapWrapper, { GridLadder, RowWrapper, Square } from './styled'

const Map = () => {
  // console.log(newMap(19, 4))
  const numberOfSquare = newMap(19, 4)
  const [squarePlayer, setSquarePlayer] = useState(0)
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const control = useAnimation()
  const diceRef = useRef<StartHandle>()
  const [resultRollDice, setResultRollDice] = useState(1)
  console.log(resultRollDice)
  // useEffect(() => setResultRollDice(diceRef.current?.resultRollDice), [diceRef.current?.play])
  useEffect(() => control.set('playerJump'), [])
  const throwDice = () => {
    openModal()
    diceRef.current?.togglePlay()
  }
  const stopDice = () => {
    diceRef.current?.togglePlay()
    setSquarePlayer(squarePlayer + diceRef.current?.resultRollDice)
    setResultRollDice(diceRef.current?.resultRollDice)
  }
  const test = () => {
    closeModal()
    setTimeout(() => control.start('up'), 1000)
  }

  return (
    <>
    <Background>
      <GridLadder>
          <Ladder />
      </GridLadder>
    </Background>
    <MapWrapper>
      {numberOfSquare.map((row, i) => {
        return (
          <RowWrapper key={i}>
            {row.map((square) => {
              return (
                <Square
                  key={square.number}
                  backgroundColor={square.color}
                  size={square.size}
                  align={square.align}
                >
                  {square.number === 1 && <></>}
                  {square.number}
                </Square>
              )
            })}
          </RowWrapper>
        )
      })}
      {<Player control={control} custom={{ squarePlayer, resultRollDice }}/>}
      <WrapperCard height='100px' width='380px' color='#ff737e'>
        <Button onClick={throwDice}> Play </Button>
      </WrapperCard>
    </MapWrapper>
    <Modal isOpenModal={isOpenModal}>
      <Dice ref={diceRef} />
      <div>
        <Button onClick={stopDice}> Stop </Button>
        <Button onClick={test}> close </Button>
      </div>
    </Modal>
    </>
  )
}

export default Map

/* const rotateDiceUp = () => {
      diceRef.current.rotateDiceUp()
      setCount(count + 1)
    }
    const rotateDiceDown = () => {
      diceRef.current.rotateDiceDown()
      setCount(count - 1)
    }

    useEffect(() => {
      // cons ole.log(diceRef.current?.position)
    }, [count]) */
