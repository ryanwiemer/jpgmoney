import Image from 'next/image'
import styled from '@emotion/styled'
import { toUSD, formatNumber } from '../util/util'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.gradient};
  padding: 4px;
  border-radius: 4px;
`

const InnerWrapper = styled.div`
  background: ${props => props.theme.colors.muted};
  color: ${props => props.theme.colors.text};
  position: relative;
  padding: 20px;
  border-radius: 4px;
  max-width: 300px !important;
  z-index: 2;
  text-align: center;
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    max-width: 400px !important;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  img {
    border-radius: 4px !important;
  }
`

const Price1 = styled.p`
  font-weight: ${props => props.theme.fontWeights.bold};
`

const Price2 = styled.p`
  font-size: 0.9em;
`

const Info = styled.p`
  line-height: 1.2;
  margin: 0.5rem 0 0 0;
  font-size: 0.9em;
`

const OpenSea = styled.a`
  display: inline-block;
  color: ${props => props.theme.colors.text};
`

const Recent = styled.span`
  background: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-weight: ${props => props.theme.fontWeights.bold};
  top: -20px;
  left: -20px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  z-index: 2;
  transform: rotate(-25deg);
  font-size: 0.9em;
  color: black;
`

const Frame = props => {
  const rawCrypto = props.saleRawPrice / Math.pow(10, props.saleDecimals)
  const cash = toUSD(rawCrypto, props.saleRate)
  const crypto = formatNumber(rawCrypto)
  const date =
    props.saleDate != null ? new Date(props.saleDate.timestamp + 'Z') : null

  return (
    <Wrapper>
      <InnerWrapper>
        {props.recent && <Recent>NEW</Recent>}
        {props.image && (
          <ImageWrapper style={{ borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              draggable="false"
              placeholder="blur"
              blurDataURL={props.placeholder}
              alt={props.name}
              {...props.image}
            />
          </ImageWrapper>
        )}
        {props.saleRawPrice && (
          <>
            <Price1>
              {crypto} {props.saleCurrency}
            </Price1>
            <Price2>
              {` `}
              {cash} USD{props.disclaimer && <>*</>}
            </Price2>
          </>
        )}
        <Info>
          {props.saleDate && (
            <>
              Sold{' '}
              <OpenSea href={props.link} target="_blank" rel="noreferrer">
                {formatDistanceToNow(date, { includeSeconds: true })} ago
              </OpenSea>
            </>
          )}
        </Info>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Frame
