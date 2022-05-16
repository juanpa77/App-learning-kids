import styled from '@emotion/styled'

type Steps = {
  rotate?: string
  background?: string
  border?: string
}

const Wrapper = styled('div')<Steps>`
  background: #836F62;
  transform: ${(props: Steps) => props.rotate};
  background: ${(props: Steps) => props.background};
  border: ${(props: Steps) => props.border};
  gap: 10px;
  border-radius: 15px;
`
export default Wrapper
