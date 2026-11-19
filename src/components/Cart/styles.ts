import styled from "styled-components";

import lixeira from "../../assets/lixeira.svg";
import { breakpoints, cores } from "../../styles";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  justify-content: flex-end;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.73);
`;

export const Sidebar = styled.aside`
  position: relative;
  z-index: 1;
  width: 360px;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 32px 8px 0;
  background-color: ${cores.vermelho};

  @media (max-width: ${breakpoints.mobile}) {
    width: 85%;
  }
`;

export const Itens = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 8px 8px 12px;
  background-color: ${cores.bege};
  color: ${cores.vermelho};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }
`;

export const Remover = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 16px;
  height: 16px;
  border: none;
  background: url("${lixeira}") no-repeat center / contain;
  cursor: pointer;
`;

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
  color: ${cores.bege};
  font-size: 14px;
  font-weight: bold;
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
`;

export const Vazio = styled.p`
  color: ${cores.bege};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;
