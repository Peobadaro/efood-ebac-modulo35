import styled from 'styled-components'

import fundo from '../../assets/pattern.svg'
import { breakpoints, cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${cores.bege};
  background-image: url("${fundo}");
  background-repeat: repeat;
  padding: 53px 0;

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
