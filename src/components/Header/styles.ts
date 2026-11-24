import styled from 'styled-components'

import fundo from '../../assets/images/fundo-header.png'
import { breakpoints, cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${cores.bege};
  background-image: url("${fundo}");
  background-size: cover;
  background-position: center;
  padding: 64px 0;

  .container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  a,
  span {
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
  }

  span {
    text-align: right;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 32px 0;

    .container {
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 16px;
    }

    span {
      text-align: center;
    }
  }
`
