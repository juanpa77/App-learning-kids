
import React from 'react'
import Card from '../Card/styled'
import Path from './Path/path'
import { css } from '@emotion/react'
import Container from './styled'
import { arrayGenerator } from '../../services/arrayGenerator'
import Link from 'next/link'

const size = css`
  width: 100px;
  height: 100px;
  grid-area: C1;
`
const size2 = css`
  width: 100px;
  height: 100px;
  grid-area: C2;
`
const level3 = css`
  width: 100px;
  height: 100px;
  grid-area: C3;
`
type Props = {}

const Map = (props: Props) => {
  return (
    <Container>
      <Link href={'./learnToRead'}>
        <Card color='rgba(222, 0, 147, 0.84)' css={size}>
          <p>prueba1</p>
        </Card>
      </Link>
      <Path steps={arrayGenerator(4)} gridArea='ST' display='flex'/>
      <Card color='rgba(222, 0, 147, 0.84)' css={size2}>
        <p>prueba</p>
      </Card>
      <Path steps={arrayGenerator(4)} gridArea='S2' rotate='rotate(-90)' display='flex' direction='column-reverse'/>
      <Card color='rgba(222, 0, 147, 0.84)' css={level3}>
        <p>prueba3</p>
      </Card>
    </Container>
  )
}

export default Map
