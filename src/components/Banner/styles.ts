import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'

export const BannerContainer = styled.div`
  position: relative;
  height: 280px;
  background-size: cover;
  background-position: center;
  color: ${cores.branco};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 0 32px;
  }
`

export const Tipo = styled.span`
  font-size: 32px;
  font-weight: 100;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`
