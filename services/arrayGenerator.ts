import randomNumber from './math'

export const newNumberArray = (n: number) => {
  return [...new Array(n)].map((e, column) => column + 1)
}

export const newDecresaingNumberArray = (n: number) => {
  return [...new Array(n)].map((e, column) => n - column)
}

interface Square {
  number: number
  size: number
  align: number
  color: number
}

export const newMap = (numberSquares: number, numberRows: number) => {
  const map: Square[][] = []
  let count = 0

  for (let row = 0; row < numberRows; row++) {
    map.push([])
    map[row].push(new Array(5) as unknown as Square)
    for (let column = 0; column < 5; column++) {
      map[row][column] = {
        number: numberSquares - count,
        size: randomNumber(3),
        align: randomNumber(3),
        color: randomNumber(6)
      }
      // check if the row is even, if true, invert the array
      if ((row + 1) % 2 === 0) {
        map[row].sort((element1, element2) => element1.number - element2.number)
      }
      count++
    }
  }
  return map
}
