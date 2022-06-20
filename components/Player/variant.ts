export default interface Move {
  squarePlayer: number
  resultRollDice: number
}

export const playerJump = {
  init: {
    x: -800,
    y: 50
  },
  up: (move: Move) => ({
    x: movePlayer(move),
    y: jumps(move.resultRollDice),
    transition: {
      duration: 0.5 * move.resultRollDice
    }
  })
}

const getCoordinatesX = (initPosition) => {
  // const result = (jumps * 110 - 800) - initPosition
  const result = initPosition + 110
  return result
}
// const getCoordinatesY = (jumps: number, initPosition = 0) => jumps * 110 - 800 - initPosition

const movePlayer = ({ squarePlayer, resultRollDice }: Move) => {
  const initSquare = -100 * (8 - squarePlayer)
  const jumpsCoordinates: number[] = [initSquare]
  for (let jump = 1; jump < resultRollDice; jump++) {
    jumpsCoordinates.push(getCoordinatesX(initSquare))
  }
  console.log(jumpsCoordinates, squarePlayer)
  return jumpsCoordinates
}

const jumps = (numberJumps: number) => {
  const jumps: number[] = [-100, 20]
  for (let jump = 1; jump < numberJumps; jump++) {
    jumps.push(20)
    jumps.push(-100)
  }
  console.log(jumps)
  return jumps
}
