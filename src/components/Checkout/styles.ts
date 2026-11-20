import styled from "styled-components";

import { cores } from "../../styles";

export const Titulo = styled.h3`
  color: ${cores.bege};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Linha = styled.div<{ $colunas?: string }>`
  display: grid;
  grid-template-columns: ${({ $colunas }) => $colunas || "1fr"};
  column-gap: 34px;
`;

export const Campo = styled.div`
  margin-bottom: 8px;

  label {
    display: block;
    margin-bottom: 8px;
    color: ${cores.bege};
    font-size: 14px;
    font-weight: bold;
  }

  input {
    width: 100%;
    height: 32px;
    padding: 0 8px;
    border: 2px solid ${cores.bege};
    background-color: ${cores.bege};
    color: #4b4b4b;
    font-size: 14px;
    font-weight: bold;
    outline: none;

    &.erro {
      border-color: #ffb930;
    }
  }

  small {
    display: block;
    margin-top: 4px;
    color: ${cores.bege};
    font-size: 12px;
  }
`;

export const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export const Botao = styled.button`
  width: 100%;
  border: none;
  padding: 4px 0;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Texto = styled.p`
  color: ${cores.bege};
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`;

export const Erro = styled.p`
  margin-top: 8px;
  color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
`;
