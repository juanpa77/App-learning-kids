import styled from '@emotion/styled'

type Props = {
  area?: string
  fontSize?: string
}

const Button = styled('button')`
  align-self: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: solid 2px white;
  font-size: ${(props: Props) => props.fontSize};
  background-color: #7d14a2;
  grid-area: ${(props: Props) => props.area};
  cursor: pointer;
  :hover {
    background-color: white;
  }
`
export default Button
