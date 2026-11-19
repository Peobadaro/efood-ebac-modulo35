import styled from "styled-components";

import { breakpoints, cores } from "../../styles";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.73);
`;

export const Conteudo = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  max-width: 1024px;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 32px;
  background-color: ${cores.vermelho};
  color: ${cores.branco};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    flex-shrink: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 40px 16px 16px;

    img {
      width: 100%;
      height: 200px;
    }
  }
`;

export const Fechar = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  color: ${cores.branco};
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
`;

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`;

export const Texto = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

export const Botao = styled.button`
  border: none;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  cursor: pointer;
`;
