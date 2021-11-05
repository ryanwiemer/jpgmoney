import { useState } from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import Arrow from '../icons/Arrow'

const Item = styled(motion.li)`
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid ${props => props.theme.colors.muted};
  padding: 0 0 1.5rem 0;
  margin: 0 0 1.5rem 0;
  tranistion: all 0.25s;
`

const Heading = styled(motion.h3)`
  position: relative;
  display: block;
  cursor: pointer;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 1em;
  line-height: 1.2;
  padding: 0 0 0 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.25em;
  }
`

const Icon = styled(motion.div)`
  cursor: pointer;
  transition: transform 0.25s;
  transform: rotate(${props => (props.open ? '90deg' : '0')});
  position: absolute;
  display: flex;
  left: 0;
  top: 0;
  display: inline-block;
  svg {
    fill: ${props => props.theme.colors.text};
    width: 12px;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      width: 14px;
    }
  }
`

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  line-height: 1.4;
`

const Content = styled(motion.div)`
  padding: 1rem 1rem 0 0;
  strong {
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  p {
    margin: 0 0 1rem 0;
    &:last-of-type {
      margin: 0;
    }
  }
`

const Accordion = props => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <Item key={props.heading}>
      <Heading onClick={toggleOpen} open={isOpen}>
        {props.heading}
        <Icon open={isOpen} onClick={toggleOpen}>
          <Arrow />
        </Icon>
      </Heading>
      <AnimatePresence initial={false}>
        {isOpen && (
          <ContentWrapper
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <Content>{props.children}</Content>
          </ContentWrapper>
        )}
      </AnimatePresence>
    </Item>
  )
}
export default Accordion
