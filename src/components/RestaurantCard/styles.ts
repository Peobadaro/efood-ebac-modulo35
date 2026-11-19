import styled from "styled-components";
import { Link } from "react-router-dom";

import { cores } from "../../styles";

export const Card = styled.li`
  position: relative;
  background-color: ${cores.branco};
  border: 1px solid ${cores.vermelho};
  border-top: none;
`;

export const Imagem = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  object-fit: cover;
`;

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Conteudo = styled.div`
  padding: 8px;
`;

export const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const Nota = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
`;

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`;

export const Botao = styled(Link)`
  display: inline-block;
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`;
