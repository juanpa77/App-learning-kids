import styled from '@emotion/styled'

const Container = styled.div`
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
export default Container
