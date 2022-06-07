import { randomNumberbetween } from './math'

export const getNewPosition = () => {
  return [randomNumberbetween(100, 800), randomNumberbetween(100, 800)]
}
