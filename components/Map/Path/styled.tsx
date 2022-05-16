import styled from '@emotion/styled'

type Path = {
  gridArea: string
  rotate?: string
  display?: string
  direction?: string
}

const Container = styled('div')<Path>`
  grid-area: ${(props: Path) => props.gridArea};
  display: ${(props: Path) => props.display};
  flex-direction: ${(props: Path) => props.direction};
  transform: ${(props: Path) => props.rotate};
  gap: 10px;
`
export default Container
