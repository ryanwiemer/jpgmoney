import styled from '@emotion/styled'
import { toUSD, formatNumber } from '../util/util'

const Wrapper = styled.div`
  position: relative;
  background: ${props => props.theme.colors.muted};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5em 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 50vh;
  }
`

const List = styled.ul`
  margin: 0 auto;
  max-width: 1000px;
  padding: 1.5em;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-gap: 2rem;
  }
`

const Item = styled.li`
  padding: 1rem;
`

const Heading = styled.h3`
  font-size: 0.9em;
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
  border-bottom: 2px solid ${props => props.theme.colors.text};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    margin: 0 0 1rem 0;
  }
`

const Number = styled.div`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 1.25em;
  line-height: 1.2;
  margin: 0 0 0.5rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.75em;
  }
`

const Currency = styled.div`
  font-size: 0.9em;
`

const Stats = props => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Heading>Floor Price</Heading>
          {props.floor && (
            <>
              <Number>{formatNumber(props.floor)} ETH</Number>
              <Currency>{toUSD(props.floor, props.rate)}*</Currency>
            </>
          )}
          {!props.floor && <Number>---</Number>}
        </Item>
        <Item>
          <Heading>Lifetime Sales</Heading>
          <Number>{formatNumber(props.totalSales)}</Number>
        </Item>
        <Item>
          <Heading>Volume Traded</Heading>
          <Number>{formatNumber(props.totalVolume)} ETH</Number>
          <Currency>{toUSD(props.totalVolume, props.rate)}*</Currency>
        </Item>
      </List>
    </Wrapper>
  )
}

export default Stats
