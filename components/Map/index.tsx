import { useAnimation } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useModal } from '../../hooks/useModal'
import { newMap } from '../../services/arrayGenerator'
import Button from '../Button/styled'
import WrapperCard from '../Card/wrapper'
import Dice from '../Dice'
import { Modal } from '../modal'
import Player from '../Player'
import MovePlayer from '../Player/motionControl'
import Background from './background'
import useDice from './hooks/useDice'
import Ladder from './ladder'
import MapWrapper, { GridLadder, RowWrapper, Square } from './styled'

const Map = () => {
  const player1 = useMemo(() => new MovePlayer(), [])
  const numberOfSquare = useMemo(() => newMap(19, 4), [])
  const control = useAnimation()
  const { togglePlay, resultRollDice, rotateDice } = useDice()
  const [isOpenModal, openModal, closeModal] = useModal(false)
  const [squarePlayer, setSquarePlayer] = useState(0)

  useEffect(() => control.set('playerJump'), [])

  const throwDice = () => {
    openModal()
    togglePlay()
  }
  const stopDice = () => {
    togglePlay()
  }
  const movePlayer = () => {
    closeModal()
    player1.movePlayer(squarePlayer, resultRollDice)
    control.start('up')
    setSquarePlayer(squarePlayer + resultRollDice)
    player1.resetCoordinates()
    console.log(resultRollDice)
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
                  {/* {square.number === 1 && <></>} */}
                  {square.number}
                </Square>
              )
            })}
          </RowWrapper>
        )
      })}
      {<Player init='init' control={control} custom={{ x: player1.coordinatesX, y: player1.coordinatesY }}/>}
      {/* {<Player init='test' control={control2} custom={{ squarePlayer, resultRollDice }}/>} */}
      <WrapperCard height='100px' width='380px' color='#ff737e'>
        <Button onClick={throwDice}> Play </Button>
      </WrapperCard>
    </MapWrapper>
    <Modal isOpenModal={isOpenModal}>
      <Dice rotateDice={rotateDice} />
      <div >
        <Button onClick={stopDice}> Stop </Button>
        <Button onClick={movePlayer}> close </Button>
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
