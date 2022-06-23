
import Card from './styled'
// import PencilCartoon from 'next/image'
import Link from 'next/link'

type Props = {
  link: string
  imgUrl?: string
}

const MainMenuCard = ({ link, imgUrl }: Props) => {
  return (
    <>
      <Link href={link}>
        <Card color={'#FF2D55'} >
          {/* <strong>Aprende a leer</strong> */}
        </Card>
      </Link>
    </>
  )
}

export default MainMenuCard
