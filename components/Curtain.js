import { motion } from 'framer-motion'
import styled from '@emotion/styled'

const Wrapper = styled(motion.div)`
  position: fixed;
  background: ${props => props.theme.colors.background};
  height: 100vh;
  width: 100%;
  z-index: 3;
  top: 60px;
`

let easing = [0.175, 0.85, 0.42, 0.96]
const variants = {
  initial: {
    display: 'none',
    height: 0,
  },
  exit: {
    display: 'block',
    height: '100vh',
    transition: {
      duration: 0.75,
      ease: easing,
    },
  },
}

const Curtain = props => {
  return <Wrapper variants={variants} initial="initial" exit="exit" />
}

export default Curtain
