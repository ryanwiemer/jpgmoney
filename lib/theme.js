const fonts = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif`

const theme = {
  config: {
    useColorSchemeMediaQuery: false,
  },
  breakpoints: ['35em', '50em', '80em'],
  responsive: {
    small: '35em',
    medium: '50em',
    large: '80em',
  },
  colors: {
    text: '#ffffff',
    background: '#000000',
    muted: '#181818',
    gradient: 'linear-gradient(to right, #6894f2, #c5fde4)',
    gradientFallback: '#6894f2',
    modes: {
      dark: {},
    },
  },
  fonts: {
    monospace: 'ui-monospace, "Roboto Mono", Menlo, Consolas, monospace',
    heading: `${fonts}`,
    body: `${fonts}`,
  },
  text: {
    heading: {
      fontSize: ['2em', '2.5em', '3em'],
      textTransform: 'capitalize',
    },
  },
  lineHeights: {
    heading: 1.125,
    body: 1.5,
  },
  fontWeights: {
    body: 400,
    bold: 600,
    heading: 800,
  },
  layout: {
    container: {
      maxWidth: 1000,
      my: 100,
      mx: 'auto',
      px: ['1.5em', '1.5em', '3em'],
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
      margin: 0,
      overflowX: 'hidden',
      minHeight: '100vh',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    img: {
      maxWidth: '100%',
    },
    a: {
      textDecoration: 'inherit',
    },
  },
}

export default theme
