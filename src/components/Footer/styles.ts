import styled from 'styled-components'

import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  padding: 40px 0;
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Redes = styled.ul`
  display: flex;
  gap: 8px;
  margin: 32px 0 80px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`

export const Texto = styled.p`
  max-width: 480px;
  font-size: 10px;
  line-height: 12px;
`
