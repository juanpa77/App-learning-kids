import randomNumber from './math'

const syllablesString = 'CU-CO CU-CA CU-BO CU-BA MA-MA PA-PA TI-TO TA-SA PA-TO ME-SA BE-S0 PI-NO LI-MA LA-NA NA-VO NO-TA RO-JO GO-RO ME-MA LO-VO LA-LO LU-LU LO-MO BE-BE BO-TE DE-DO DE-MO MO-MO MI-MO DO-MO DI-NO PI-PO PO-PI PU-PO PI-NO'
const prueba = syllablesString.split(' ')

const vowels: string[] = ['A', 'E', 'I', 'O', 'U']

const consonant: string[] = ['B', 'C', 'D', 'F', 'G', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'P', 'R', 'S', 'T', 'V']

const syllables = ['ma', 'me', 'mi', 'mo', 'mu', 'ra', 're', 'ri', 'ro', 'ru', 'ta', 'te', 'ti', 'to', 'tu']

const limit = consonant.length

const limitSyllables = syllables.length

export const syllableGenerator = (): string[] => {
  const index = randomNumber(limit)
  return vowels.map((vowel) => consonant[index] + vowel)
}

const getRandomSyllable = () => {
  return syllables[randomNumber(limitSyllables)]
}

export const bySyllableGenerator = (): string[] => {
  const index = randomNumber(limitSyllables)
  const syllablesArray = syllables.map((syllable) => `${syllable}-${getRandomSyllable()}`)
  syllablesArray.sort(function () { return Math.random() - 0.5 })
  console.log(syllablesArray)
  return syllablesArray
}
