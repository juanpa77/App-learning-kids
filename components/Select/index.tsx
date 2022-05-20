import { ChangeEvent } from 'react'
import Select, { Option } from './styled'

type Props = {
  options: string[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const SelectLevel = ({ options, onChange }: Props) => {
  return (
    <Select onChange={onChange}>
      {options.map((option, i) => <Option key={i}>{option}</Option>)}
    </Select>
  )
}

export default SelectLevel
