import randomNumber from './math'

const vowels: string[] = ['A', 'E', 'I', 'O', 'U']

const consonant: string[] = ['B', 'C', 'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'P', 'R', 'S', 'T', 'V', 'Z']
const limit = consonant.length

const syllableGenerator = (): string[] => {
  const index = randomNumber(limit)
  return vowels.map((vowel) => vowel + consonant[index])
}

export default syllableGenerator
