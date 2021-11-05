import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { Heading } from 'theme-ui'
import Curtain from '../components/Curtain'

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 600px;
  padding: 0 1rem;
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

export default function Custom404() {
  return (
    <>
      <NextSeo title="404" description="Page not found" />
      <Curtain />
      <Wrapper>
        <motion.div variants={variants} initial="initial" animate="enter">
          <Heading>404 - Page Not Found</Heading>
        </motion.div>
      </Wrapper>
    </>
  )
}
