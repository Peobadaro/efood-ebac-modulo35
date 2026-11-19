import styled from "styled-components";

import { cores } from "../../styles";

export const Card = styled.li`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

export const Imagem = styled.img`
  display: block;
  width: 100%;
  height: 167px;
  object-fit: cover;
`;

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`;

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex: 1;
`;

export const Botao = styled.button`
  width: 100%;
  border: none;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  cursor: pointer;
`;
