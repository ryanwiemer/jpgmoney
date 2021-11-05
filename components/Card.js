import { motion } from 'framer-motion'
import Image from 'next/image'
import styled from '@emotion/styled'
import Link from 'next/link'

const Wrapper = styled(motion.li)`
  padding: 4px;
  position: relative;
  width: 100%;
  margin: 0 0 0.25rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 0;
    display: inline-block;
    &:first-of-type {
      grid-column: -1 /1;
      .inner {
        padding-bottom: 50%;
      }
    }
  }
  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: ${props => props.theme.colors.gradient};
    z-index: -1;
    transition: opacity 0.25s linear;
    border-radius: 8px;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
  @media (hover: none) {
    &::before {
      opacity: 0 !important;
    }
  }
  a {
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const InnerWrapper = styled.div`
  padding-bottom: 50%;
  position: relative;
  a {
    color: white;
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding-bottom: 100%;
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  img {
    transition: all 0.3s;
    border-radius: 4px !important;
  }
  &::after {
    border-radius: 4px;
    z-index: 2;
    content: '';
    position: absolute;
    top: 0;
    let: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`

const Name = styled.div`
  position: absolute;
  top: 0;
  padding: 0.75rem 0.5rem 0 0.75rem;
  line-height: 1;
  z-index: 2;
  text-shadow: rgb(0 0 0 / 10%) 1px 1px;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 1.25rem 0.5rem 0 1.25rem;
    font-size: 1.25em;
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

const Card = props => {
  return (
    <Wrapper
      variants={variants}
      initial="initial"
      animate="enter"
      key={props.name}
    >
      <InnerWrapper className="inner">
        <Link href={props.link} scroll={false}>
          <a>
            <ImageWrapper style={{ borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src={props.image.src}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={props.placeholder}
                alt={props.name}
              />
            </ImageWrapper>
            <Name>{props.name}</Name>
          </a>
        </Link>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Card
