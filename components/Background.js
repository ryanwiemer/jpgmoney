import styled from '@emotion/styled'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: #000000;
  background-image: linear-gradient(
    0deg,
    rgba(43, 43, 43, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
`

const Background = props => {
  return <Wrapper />
}

export default Background
