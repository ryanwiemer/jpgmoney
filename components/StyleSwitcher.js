import { useColorMode } from 'theme-ui'
import styled from '@emotion/styled'
import Arrow from '../icons/Arrow.js'

const Wrapper = styled.div`
  position: relative;
  z-index: 99;
  border-radius: 3px;
  display: inline-block;
  display: none;
  select {
    border-radius: 16.5px;
    background: ${props => props.theme.colors.text};
    text-align: center;
    padding: 0.5em 2em 0.5em 1em;
    cursor: pointer;
    color: #000000;
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`

const Icon = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  pointer-events: none;
  svg {
    width: 10px;
    transform: rotate(90deg);
    fill: #000000;
  }
`

const StyleSwitcher = props => {
  const [mode, setMode] = useColorMode('default')

  return (
    <Wrapper>
      <select
        onChange={e => {
          setMode(e.target.value)
        }}
        defaultValue={mode}
        value={mode}
        {...props}
      >
        <option value="default">Light</option>
        <option value="dark">Dark</option>
      </select>
      <Icon>
        <Arrow />
      </Icon>
    </Wrapper>
  )
}

export default StyleSwitcher
