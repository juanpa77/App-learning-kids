import { Coordinates } from '.'

// import MovePlayer from './motionControl'
export default interface Move {
  squarePlayer: number
  resultRollDice: number
}

export const playerJump = {
  test: {
    x: -500,
    y: 20
  },
  init: {
    x: -800,
    y: 20
  },
  up: (coordinates: Coordinates) => ({
    x: coordinates.x,
    y: coordinates.y,
    transition: {
      duration: 1 * coordinates.x.length
    }
  })
}
