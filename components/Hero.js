import { motion } from 'framer-motion'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Heading } from 'theme-ui'

const Wrapper = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  z-index: 2;
  margin: 80px 0 0 0;
  min-height: 300px;
  position: relative;
  color: white;
  text-shadow: rgb(0 0 0 / 10%) 1px 1px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    color: #000000;
    text-shadow: none;
  }
  h2 {
    z-index: 2;
  }
`

const ImageWrapper = styled(motion.div)`
  &::after {
    z-index: 2;
    content: '';
    position: absolute;
    top: 0;
    let: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    width: 50% !important;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    &::after {
      background: rgba(0, 0, 0, 0);
    }
  }
`

const Info = styled(motion.div)`
  height: 100%;
  min-height: 300px;
  padding: 1.5em;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    background: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.gradient};
    width: 50%;
    padding: 3em;
    min-height: 75vh;
  }
`

const Description = styled.p`
  z-index: 2;
  padding: 2rem 0 0 0;
`

let easing = [0.175, 0.85, 0.42, 0.96]
const variants = {
  initial: {
    opacity: 0,
    y: 100,
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

const Hero = props => {
  return (
    <Wrapper initial="initial" animate="enter" variants={variants}>
      {props.image && (
        <ImageWrapper>
          <Image
            src={props.image.src}
            layout="fill"
            placeholder="blur"
            blurDataURL={props.placeholder}
            alt={props.heading}
            objectFit="cover"
          />
        </ImageWrapper>
      )}
      <Info>
        {props.heading && <Heading>{props.heading}</Heading>}
        {props.description && <Description>{props.description}</Description>}
      </Info>
    </Wrapper>
  )
}

export default Hero
