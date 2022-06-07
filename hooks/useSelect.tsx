import { ChangeEvent, useState } from 'react'

const useSelect = () => {
  const [option, setOption] = useState('1')
  const handleOptions = (e: ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value)
  }

  return { option, handleOptions }
}

export { useSelect }
