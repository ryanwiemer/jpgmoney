import React from 'react'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { Heading } from 'theme-ui'

const Wrapper = styled.div`
  padding: 100px 1.5em 3em 1.5em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 100px 3em 2em 3em;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0;
  }
`

const HeadingWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 0;
    position: fixed;
    bottom: 1.5rem;
    left: 3rem;
    width: 100%;
  }
`

const List = styled(motion.ul)`
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-column: 5 / span 8;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5em;
  }
`

let easing = [0.175, 0.85, 0.42, 0.96]
const headingVariants = {
  initial: {
    opacity: 0,
    y: '100%',
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
      ease: easing,
    },
  },
}

const CardList = props => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <motion.div
          variants={headingVariants}
          initial="initial"
          animate="enter"
        >
          <Heading>Featured</Heading>
        </motion.div>
      </HeadingWrapper>
      <List>{props.children}</List>
    </Wrapper>
  )
}

export default CardList
