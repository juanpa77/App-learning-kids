
export default class MovePlayer {
  x: number
  Yinit: number
  isMoveRight: boolean
  coordinatesX: number[]
  coordinatesY: number[]

  constructor () {
    this.x = -800
    this.Yinit = 5
    this.isMoveRight = true
    this.coordinatesX = [this.x]
    this.coordinatesY = [this.Yinit]
  }

  movePlayer (squarePlayer: number, resultRollDice: number) {
    for (let jump = 0; jump < resultRollDice; jump++) {
      if (squarePlayer + jump === 4) {
        const lastValue = this.coordinatesX[this.coordinatesX.length - 1]
        this.coordinatesX.push(lastValue)
        this.coordinatesY.push(this.getCoordinatesY(squarePlayer).floorCoordinates)
        this.toggleDirection()
        continue
      }
      this.getCoordinatesX()
      this.coordinatesX.push(this.x)
      const { floorCoordinates, jumpsCoordinates } = this.getCoordinatesY(squarePlayer + jump)
      this.coordinatesY.push(jumpsCoordinates)
      this.coordinatesY.push(floorCoordinates)
    }
    console.log(this.coordinatesX, squarePlayer, resultRollDice, this.coordinatesY)
  }

  getCoordinatesX () {
    this.isMoveRight
      ? this.x = this.x + 160
      : this.x = this.x - 160
  }

  getCoordinatesY (squarePlayer: number) {
    let floorCoordinates = 20
    let jumpsCoordinates = -100

    if (squarePlayer > 4) {
      floorCoordinates += -160
      jumpsCoordinates += -180
    }
    return { floorCoordinates, jumpsCoordinates }
  }

  toggleDirection () {
    this.isMoveRight = !this.isMoveRight
    this.x = -160
    this.Yinit = -160
  }

  resetCoordinates () {
    this.coordinatesX = []
    this.coordinatesY = []
  }
}
