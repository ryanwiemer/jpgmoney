import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Link from 'next/link'
import featured from '../lib/data'

const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  a {
    font-weight: ${props => props.theme.fontWeights.bold};
    position: relative;
    text-decoration: none;
  }
`
const Nav = styled.div`
  background: ${props => props.theme.colors.background};
  transition: all 0.3s;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5em;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 0 3em;
  }
`

const Logo = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: ${props => props.theme.colors.text};
  }
`

const List = styled(motion.ul)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 1rem 1.5rem;
  background: ${props => props.theme.colors.gradient};
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 1rem 3rem;
  }
  a {
    color: black;
  }
`

const Item = styled(motion.li)`
  max-width: 75%;
  line-height: 1.2;
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 0 0 1.5rem 0;
    pointer-events: auto;
  }
  &.big {
    font-size: 2.5rem;
    flex: 1;
    margin: 0 0 2em 0;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 4rem;
    }
  }
  &:last-of-type {
    margin-bottom: 1rem;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      margin-bottom: 2rem;
    }
  }
`

const Badge = styled.span`
  display: inline-block;
  position: relative;
  top: -0.35rem;
  left: 0.25rem;
  font-size: 0.45em;
  border: 2px solid black;
  color: black;
  width: 1.5em;
  height: 1.5em;
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 0.15em;
`

const Toggle = styled.div`
  transition: transform 0.3s;
  position: absolute;
  right: 1.5rem;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    right: 3rem;
  }
`

const Button = styled.button`
  position: relative;
  cursor: pointer;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin: 0;
  padding: 0;
  transition: all 0.3s;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  z-index: 99;
  transition: 0.3s all;
  background: ${props =>
    props.open ? props.theme.colors.text : props.theme.colors.text};
  color: ${props =>
    props.open ? props.theme.colors.background : props.theme.colors.background};
  box-shadow: rgb(0 0 0 / 4%) 0px 8px 16px, rgb(0 0 0 / 8%) 0px 4px 8px;
  &:hover {
  }
  @media (hover: none) {
  }
`

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
    document.documentElement.classList.toggle('contain')
  }

  function close() {
    setIsOpen(false)
    document.documentElement.classList.remove('contain')
  }

  const itemVariants = {
    open: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const listVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      y: '100%',
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <Header>
      <Nav>
        <Logo>
          <Link href="/" scroll={false}>
            <a onClick={close}>JPG Money</a>
          </Link>
        </Logo>
        <Toggle>
          <Button open={isOpen} onClick={toggle} aria-label="Toggle Menu">
            {isOpen ? 'Close' : 'Menu'}
          </Button>
        </Toggle>
      </Nav>
      <List
        open={isOpen}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={listVariants}
      >
        <Item initial={false} variants={itemVariants} className="big">
          <Link href="/" scroll={false}>
            <a onClick={close}>JPG Money</a>
          </Link>
        </Item>

        <Item initial={false} variants={itemVariants}>
          <Link href="/featured" scroll={false}>
            <a onClick={close}>
              Featured<Badge>{featured.length}</Badge>
            </a>
          </Link>
        </Item>
        <Item initial={false} variants={itemVariants}>
          <Link href="/about" scroll={false}>
            <a onClick={close}>About</a>
          </Link>
        </Item>
        <Item initial={false} variants={itemVariants}>
          <Link href="/faq" scroll={false}>
            <a onClick={close}>FAQ</a>
          </Link>
        </Item>
      </List>
    </Header>
  )
}

export default Menu
