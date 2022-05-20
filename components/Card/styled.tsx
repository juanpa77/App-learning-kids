import styled from '@emotion/styled'
import { motion } from 'framer-motion'

type Props = {
  imgUrl?: string
}

const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.color};
  background-image: url(${(props: Props) => props.imgUrl});
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
