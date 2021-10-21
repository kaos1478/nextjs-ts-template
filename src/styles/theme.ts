const breakpoints = [
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
]

export type ThemeType = typeof theme

const theme = {
  colors: {
    primary: 'hotpink',
    secundary: '#AA8234',
    terciary: '#ABCDEF',
    white: '#FFFDF9',
    black: '#222222',
    text: '#222222'
  },
  fontSizes: {
    small: '1.125rem',
    medium: '1.5rem',
    large: '2.25rem'
  },
  breakpoints
}

export default theme
