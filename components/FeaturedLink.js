import styled from '@emotion/styled'
import Link from 'next/link'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em 1.5em;
  background: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.gradient};
  line-height: 1.2;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 1.25em;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 3em;
    font-size: 1.75em;
    min-height: 50vh;
  }
  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
  }
`
const FeaturedLink = props => {
  return (
    <Wrapper>
      <Link href="/featured/" passHref scroll={false}>
        <a>Return to Featured</a>
      </Link>
    </Wrapper>
  )
}

export default FeaturedLink
