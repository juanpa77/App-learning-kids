import styled from '@emotion/styled'
// import { colors } from '../../theme/colors'

const SquareSize = ['120px', '140px', '160px']
const SquareAlingn = ['start', 'center', 'end']
const SquareColor = ['#fef100', '#74c3cb', '#0066b5', '#ff737e', '#bba2cd', '#74c36f']

const MapWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: max-content;
  gap: 55px;
  justify-content: center;
`
export const BackgroundMap = styled('div')`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
`

export default MapWrapper
type Props = {
  size: number
  align: number
  backgroundColor: number
}

type PropsLadder = {
  colum: number
  row: number
}

export const LadderWrapper = styled('div')`
  width: 110px;
  height: 210px;
  justify-self: center;
  grid-column-start: ${(props: PropsLadder) => props.colum};
  grid-row-start: ${(props: PropsLadder) => props.row};
`

export const Square = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props: Props) => SquareSize[props.size]};
  height: ${(props: Props) => SquareSize[props.size]};
  align-self: ${(props: Props) => SquareAlingn[props.align]};
  border-radius: 35px;
  font-size: 30px;
  background-color: ${({ backgroundColor }: Props) => SquareColor[backgroundColor]};
`

export const GridLadder = styled('div')`
  display: grid;
  position: absolute;
  width: 100%;
  height: 97vh;
  grid-template-columns: 90px repeat(5, 2fr) 2fr;  
  grid-template-rows: 30px repeat(3, 190px 60px) 240px;
  z-index: 10;
`

export const RowWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

export const Container = styled.div`
  display: grid;
  background: rgba(22, 226, 30, 0.55);
  align-items: center;
  justify-content: center;
  grid-template-areas: 'VD VD C3'
                       'VD VD S2'
                       'C1 ST C2';
  grid-template-columns: min-content max-content min-content;
  & > svg {
    grid-area: ST;
  }
`
