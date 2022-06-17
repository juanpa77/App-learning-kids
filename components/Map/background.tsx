import BackgroundImg from 'next/image'
import { ReactElement } from 'react'
import { BackgroundMap } from './styled'

type Props = {
  children: ReactElement | ReactElement[]
}

const Background = ({ children }: Props) => {
  return (
    <BackgroundMap>
      <BackgroundImg src={'/backgroundMap.jpg'} layout='fill' />
      {children}
    </BackgroundMap>
  )
}

export default Background
