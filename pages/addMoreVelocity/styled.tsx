import styled from '@emotion/styled'
import { colors } from '../../theme/colors'

const borderRadius = '9px'

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 10px;
`
export const WrapperWord = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  padding: 30px;
  height: 94vh;
  width: 100%;
  border-radius: ${borderRadius};

  gap: 10px;
  background-color: ${colors.backGround};
  font-size: 35px;
`
export const WrapperControles = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-evenly;
  height: 94vh;
  padding: 15px;
  border-radius: ${borderRadius};
  background-color: ${colors.backGround};
    & > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
`
