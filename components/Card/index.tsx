
import React from 'react'
import Card from './styled'
import PencilCartoon from 'next/image'
import Link from 'next/link'

type Props = {}

const MainMenuCard = (props: Props) => {
  return (
    <>
      <Link href={'/map'}>
        <Card color={'#FF2D55'}>
          <PencilCartoon src={'/pencilCartoon.png'} width='137' height='211' />
          {/* <strong>Aprende a leer</strong> */}
        </Card>
      </Link>
    </>
  )
}

export default MainMenuCard
