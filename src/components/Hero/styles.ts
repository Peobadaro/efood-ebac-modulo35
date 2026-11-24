import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'
import { breakpoints, cores } from '../../styles'

export const HeroContainer = styled.header`
  background-color: ${cores.bege};
  background-image: url("${fundo}");
  background-size: cover;
  background-position: center;
  height: 384px;
  padding: 64px 0 40px;
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Titulo = styled.h1`
  margin-top: 138px;
  max-width: 540px;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 64px;
    font-size: 24px;
    line-height: 32px;
  }
`
