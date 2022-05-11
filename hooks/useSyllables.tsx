import { useState } from 'react'
import syllableGenerator from '../services/syllablesFactory'

const useSyllables = () => {
  const [syllables, setSyllables] = useState(syllableGenerator())
  const [index, setIndex] = useState(0)
  const handell = () => {
    setIndex(index + 1)
    if (index + 1 >= syllables.length) {
      setSyllables(syllableGenerator())
      // console.log(syllables)
      setIndex(0)
    }
  }
  return { syllables, index, handell }
}

export default useSyllables
