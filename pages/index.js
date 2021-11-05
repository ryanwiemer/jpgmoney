import styled from '@emotion/styled'
import Link from 'next/link'
import { Container } from 'theme-ui'
import Frame from '../components/Frame'
import { getLatest } from '../lib/openSeaAPI'
import { motion } from 'framer-motion'
import Curtain from '../components/Curtain'

const Wrapper = styled(motion.div)`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    height: 100%;
    min-height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Grid = styled.div`
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2.5em;
  }
`

const Art = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6em 0 2em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-column: 1 / span 4;
    margin: 1em 0;
  }
`

const Text = styled(motion.div)`
  font-size: 1.25em;
  line-height: 1.3;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.5em;
    line-height: 1.3;
    display: flex;
    align-items: center;
    grid-column: 5 / span 8;
  }
  em {
    display: inline;
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  span {
    margin: 1rem 0 0 0;
    display: block;
  }
  a {
    color: ${props => props.theme.colors.text};
  }
`

let easing = [0.175, 0.85, 0.42, 0.96]
const textVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25,
      duration: 0.5,
      ease: easing,
    },
  },
}

const artVariants = {
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

export default function Index(props) {
  return (
    <>
      <Curtain />
      <Container>
        <Wrapper initial="initial" animate="enter">
          <Grid>
            <Art variants={artVariants}>
              <Frame {...props} recent />
            </Art>
            <Text variants={textVariants}>
              <p>
                <em>JPG Money</em> is a virtual showcase of artwork that lives
                on the blockchain. Admire NFTs fetching staggering amounts of
                cash in the crazy world of crypto art.
                <span>
                  <Link href="/featured" scroll={false}>
                    Explore Featured NFTs
                  </Link>
                </span>
              </p>
            </Text>
          </Grid>
        </Wrapper>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const props = await getLatest('cryptopunks')
  return { props, revalidate: 10 }
}
