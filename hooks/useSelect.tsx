import { ChangeEvent, useState } from 'react'
/*
interface Props {
  list: string[]
  selectedItem: number
} */

const useSelect = () => {
  const [option, setOption] = useState('')
  const handleOptions = (e: ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value)
  }
  return { option, handleOptions }
}

export { useSelect }
