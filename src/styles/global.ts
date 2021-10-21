import { createGlobalStyle } from 'styled-components'
import facepaint from 'facepaint'

import theme, { ThemeType } from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export default createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.primary};
  }

  html, body, button, textarea, input {
    ${mq({ 'font-size': ['87.5%', '87.5%', '93.75%'] })}
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.black};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
