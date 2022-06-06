import { ChangeEvent, useState } from 'react'
/*
interface Props {
  list: string[]
  selectedItem: number
} */

const useSelect = () => {
  const [option, setOption] = useState('1')
  const handleOptions = (e: ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value)
    console.log(option)
  }

  return { option, handleOptions }
}

export { useSelect }
