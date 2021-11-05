import { useState } from 'react'
import { wrap } from 'popmotion'
import { motion, AnimatePresence } from 'framer-motion'
import styled from '@emotion/styled'
import { Heading } from 'theme-ui'
import Arrow from '../icons/Arrow.js'
import Frame from './Frame'

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors.background};
`

const GalleryWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 650px;
  height: 75vh;
  min-height: 700px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const FrameWrapper = styled(motion.div)`
  position: absolute;
  max-width: 100vw;
`

const Next = styled.button`
  top: calc(50% - 20px);
  right: 1em;
  position: absolute;
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.text};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  z-index: 2;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    right: 2.5em;
  }
`

const Previous = styled.button`
  top: calc(50% - 20px);
  left: 1em;
  position: absolute;
  background: ${props => props.theme.colors.text};
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  z-index: 2;
  svg {
    transform: scale(-1);
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    left: 2.5em;
  }
`

const Top = styled(Heading)`
  position: absolute;
  top: 3rem;
`

const Bottom = styled(Heading)`
  position: absolute;
  bottom: 3rem;
`

const InfoWrapper = styled.div`
  padding: 1.5em;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 1.5em 3em;
  }
`

const Number = styled.div`
  display: inline-block;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
  }
  span {
    display: inline-block;
    width: 1em;
  }
`

const Disclaimer = styled.div`
  display: inline-block;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
  }
  a {
    color: ${props => props.theme.colors.text};
  }
`

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      zIndex: 1,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 1,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

const Gallery = props => {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  const imageIndex = wrap(0, props.artwork.length, page)
  const total = props.artwork.length

  const blur =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8cu7cfwAIXwNxORT+PgAAAABJRU5ErkJggg=='

  return (
    <Wrapper>
      <GalleryWrapper>
        <Top>Top 10</Top>
        <Next onClick={() => paginate(1)}>
          <Arrow />
        </Next>
        <Previous onClick={() => paginate(-1)}>
          <Arrow />
        </Previous>
        <AnimatePresence initial={false} custom={direction}>
          <FrameWrapper
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          >
            <Frame
              image={props.artwork[imageIndex].image}
              placeholder={props.artwork[imageIndex].placeholder}
              saleRawPrice={props.artwork[imageIndex].saleRawPrice}
              saleDecimals={props.artwork[imageIndex].saleDecimals}
              saleCurrency={props.artwork[imageIndex].saleCurrency}
              saleRate={props.artwork[imageIndex].saleRate}
              saleDate={props.artwork[imageIndex].saleDate}
              link={props.artwork[imageIndex].link}
              disclaimer
              key={page}
              custom={direction}
              variants={variants}
            />
          </FrameWrapper>
        </AnimatePresence>
        <Bottom>Sales</Bottom>
      </GalleryWrapper>
      <InfoWrapper>
        <Number>
          <span>{imageIndex + 1}</span> / {total}
        </Number>
        <Disclaimer>
          *Uses{' '}
          <a
            href="https://www.coingecko.com/en/coins/ethereum/usd"
            target="_blank"
            rel="noreferrer"
          >
            current rates
          </a>
        </Disclaimer>
      </InfoWrapper>
    </Wrapper>
  )
}

export default Gallery
