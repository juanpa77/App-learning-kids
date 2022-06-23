import styled from '@emotion/styled'
import { border } from '../../theme/colors'

type Props = {
  width?: string
  height?: string
  opacity?: string
}

const WrapperCard = styled('div')`
  display: flex;
  background-color: ${(props) => props.color};
  width: ${(props: Props) => props.width};
  height: ${(props: Props) => props.height};
  padding: 5px;
  border-radius: ${border};
`
export default WrapperCard
