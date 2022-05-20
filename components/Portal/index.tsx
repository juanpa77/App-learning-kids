import Portalinclinado from 'next/image'
import Wrapper from './styled'

type Props = {
  area: string
  // eslint-disable-next-line no-undef
  children?: JSX.Element
}

const Portal = ({ area, children }: Props) => {
  return (
    <Wrapper area={area}>
      {children}
      <Portalinclinado src={'/portalAnimate.gif'} width='175' height='45'/>
    </Wrapper>
  )
}

export default Portal
