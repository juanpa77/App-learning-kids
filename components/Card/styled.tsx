import styled from '@emotion/styled'

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.color};
  width: 357px;
  height: 245px;
  border-radius: 15px;
  cursor: pointer;
  
  & > strong {
    /* font-size: 31px; */
    margin: 2rem;
  }
`
export default Card
