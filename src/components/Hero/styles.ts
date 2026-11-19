import styled from "styled-components";

import fundo from "../../assets/pattern.svg";
import { breakpoints, cores } from "../../styles";

export const HeroContainer = styled.header`
  background-color: ${cores.bege};
  background-image: url("${fundo}");
  background-repeat: repeat;
  padding: 40px 0;
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

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
`;
