
const randomNumber = (numberLimit: number) => {
  return Math.floor((Math.random() * numberLimit))
}

export default randomNumber

export const randomNumberbetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}
