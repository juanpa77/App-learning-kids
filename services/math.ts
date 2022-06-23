
const randomNumber = (numberLimit: number) => {
  const test = Math.floor((Math.random() * numberLimit))
  console.log(test)
  return test
}

export default randomNumber

export const randomNumberbetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}
