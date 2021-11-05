import styled from '@emotion/styled'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { Heading } from 'theme-ui'
import Curtain from '../components/Curtain'
import { Container } from 'theme-ui'
import pencil from '../public/pencil.png'
import thumbsUp from '../public/thumbs-up.png'

const StyledHeading = styled(Heading)`
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    text-align: center;
  }
`

const SubHeading = styled(motion.h3)`
  position: relative;
  display: block;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 1em;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.25em;
  }
`

const Wrapper = styled.div`
  text-align: center;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5em;
  }
`
const Box = styled.div`
  background: ${props => props.theme.colors.muted};
  border-radius: 4px;
  padding: 1.5rem;
  margin: 0 0 1rem 0;
  text-align: left;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 3rem;
  }
  a {
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.text};
  }
  p {
    margin: 2rem 0 0 0;
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

export default function About() {
  return (
    <>
      <NextSeo title="About" description="About the JPG Money website" />
      <Curtain />
      <Container>
        <motion.div variants={variants} initial="initial" animate="enter">
          <StyledHeading>About</StyledHeading>
          <Wrapper>
            <Box>
              <SubHeading>Credits</SubHeading>
              <Image src={pencil} alt="Pencil Icon" height={80} width={80} />
              <p>
                JPG Money was created by{' '}
                <a
                  href="https://twitter.com/ryanwiemer"
                  target="_blank"
                  rel="noreferrer"
                >
                  @ryanwiemer
                </a>{' '}
                with data sourced from{' '}
                <a href="https://opensea.io/" target="_blank" rel="noreferrer">
                  OpenSea
                </a>
                .
              </p>
            </Box>
            <Box>
              <SubHeading>Feedback</SubHeading>
              <Image
                src={thumbsUp}
                alt="Thumbs Up Icon"
                height={80}
                width={80}
              />
              <p>
                Noticed a bug or have a suggestion for an NFT to feature? Let me
                know by{' '}
                <a
                  href="https://github.com/ryanwiemer/jpgmoney/issues"
                  target="_blank"
                  rel="noreferrer"
                >
                  creating an issue on GitHub
                </a>
                .
              </p>
            </Box>
          </Wrapper>
        </motion.div>
      </Container>
    </>
  )
}
