import styled from '@emotion/styled'
import { Heading } from 'theme-ui'
import Frame from '../components/Frame'

const Wrapper = styled.div`
  background: ${props => props.theme.colors.background};
  position: relative;
`

const InnerWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3em 1.5em;
  max-width: 1000px;
  margin: 0 auto;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    padding: 3em;
  }
`

const StyledHeading = styled(Heading)`
  border-bottom: 2px solid;
  padding: 0 0 0.25rem 0;
`

const Content = styled.div`
  border-bottom: 2px solid;
  padding: 2em 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
  }
`

const FrameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 2rem 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    justify-content: start;
    margin: 0;
  }
`
const Description = styled.div`
  font-size: 1.25em;
  align-self: end;
`

const Notable = props => {
  return (
    <Wrapper>
      <InnerWrapper>
        <StyledHeading>Notable Purchase</StyledHeading>
        <Content>
          <FrameWrapper>
            <Frame
              image={props.image}
              placeholder={props.placeholder}
              saleRawPrice={props.saleRawPrice}
              saleDecimals={props.saleDecimals}
              saleCurrency={props.saleCurrency}
              saleRate={props.saleRate}
              saleDate={props.saleDate}
              link={props.link}
              disclaimer
            />
          </FrameWrapper>
          <Description>{props.notableDescription}</Description>
        </Content>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Notable
