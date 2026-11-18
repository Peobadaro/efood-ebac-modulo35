import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  bege: '#FFEBD9',
  fundo: '#FFF8F2',
  branco: '#FFFFFF'
}

export const breakpoints = {
  tablet: '1024px',
  mobile: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.vermelho};
  }

  a {
    color: inherit;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 80%;
    }
  }
`
