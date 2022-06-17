import { useState } from 'react'
import { useModal } from '../../hooks/useModal'
import { newMap } from '../../services/arrayGenerator'
import Dice from '../Dice'
import { Modal } from '../modal'
import Player from '../Player'
import Background from './background'
import Ladder from './ladder'
import MapWrapper, { GridLadder, RowWrapper, Square } from './styled'

const Map = () => {
  const numberOfSquare = newMap(19, 4)
  const [squarePlayer, setSquarePlayer] = useState(0)
  const [isOpenModal, openModal, closeModal] = useModal(true)
  console.log(newMap(19, 4))
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
                  {square.number === squarePlayer && <Player />}
                  {square.number}
                </Square>
              )
            })}
          </RowWrapper>
        )
      })}
    </MapWrapper>
    <Modal isOpenModal={isOpenModal}>
      <Dice />
    </Modal>
    </>
  )
}

export default Map
