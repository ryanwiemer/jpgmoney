import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Heading } from 'theme-ui'

const Wrapper = styled(motion.div)`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

let easing = [0.175, 0.85, 0.42, 0.96]
const variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
}

const Header = props => {
  return (
    <Wrapper variants={variants} initial="initial" animate="enter">
      {props.text && <Heading>{props.text}</Heading>}
    </Wrapper>
  )
}

export default Header
