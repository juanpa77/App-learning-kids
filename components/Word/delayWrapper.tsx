
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { motion } from 'framer-motion'
// import { delayChildren } from './variants'

type Props = {
  children: ReactJSXElement | ReactJSXElement[]
  isOpen: boolean
}

const DelayWrapper = ({ children, isOpen }: Props) => {
  return (
    <motion.div
      // variants={delayChildren}
      initial='closed'
      animate= {isOpen ? 'open' : 'closed'}
    >
      {children}
    </motion.div>
  )
}

export default DelayWrapper
