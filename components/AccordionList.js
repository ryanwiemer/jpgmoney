import styled from '@emotion/styled'
import { motion, AnimateSharedLayout } from 'framer-motion'

const Wrapper = styled(motion.div)`
  margin: 2rem auto 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    max-width: 750px;
    margin: 4rem auto 0;
  }
  a {
    color: ${props => props.theme.colors.text};
  }
`
const List = styled(motion.ul)``

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
      delay: 0.5,
      ease: easing,
    },
  },
}

const AccordionList = props => {
  return (
    <Wrapper>
      <AnimateSharedLayout>
        <List variants={variants} initial="initial" animate="enter">
          {props.children}
        </List>
      </AnimateSharedLayout>
    </Wrapper>
  )
}

export default AccordionList
