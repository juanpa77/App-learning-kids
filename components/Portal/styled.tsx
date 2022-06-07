import styled from '@emotion/styled'

type WrapperPortal = {
  area: string
}
const Wrapper = styled('div')`
  grid-area: ${(props: WrapperPortal) => props.area};
  height: 45px;
  width: 175px;
`
export default Wrapper
