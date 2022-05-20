
import Card from './styled'
import PencilCartoon from 'next/image'
import Link from 'next/link'

type Props = {
  link: string
  imgUrl?: string
}

const MainMenuCard = ({ link, imgUrl }: Props) => {
  return (
    <>
      <Link href={link}>
        <Card color={'#FF2D55'} imgUrl={imgUrl}>
          <PencilCartoon src={'/pencilCartoon.png'} width='137' height='211' />
          {/* <strong>Aprende a leer</strong> */}
        </Card>
      </Link>
    </>
  )
}

export default MainMenuCard
