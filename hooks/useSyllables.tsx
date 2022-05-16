import { useState } from 'react'
// import { syllableGenerator, bySyllableGenerator } from '../services/syllablesFactory'

const useSyllables = (syllableGenerator: () => string[]) => {
  const [syllables, setSyllables] = useState(syllableGenerator())
  const [index, setIndex] = useState(0)

  const handell = () => {
    setIndex(index + 1)
    if (index + 1 >= syllables.length) {
      setSyllables(syllableGenerator())
      setIndex(0)
    }
  }
  return { syllables, index, handell, setSyllables }
}

export default useSyllables
