import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { ItemCardapio } from "../../services/api";

export type ItemCarrinho = ItemCardapio & { chave: string };

export type Etapa = "carrinho" | "entrega" | "pagamento" | "confirmacao";

type CarrinhoState = {
  itens: ItemCarrinho[];
  aberto: boolean;
  etapa: Etapa;
};

const initialState: CarrinhoState = {
  itens: [],
  aberto: false,
  etapa: "carrinho",
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionar: {
      // cada item recebe uma chave própria: o mesmo prato pode entrar mais de uma vez
      reducer: (state, action: PayloadAction<ItemCarrinho>) => {
        state.itens.push(action.payload);
      },
      prepare: (prato: ItemCardapio) => ({
        payload: {
          ...prato,
          chave: `${prato.id}-${Date.now()}-${Math.random()}`,
        },
      }),
    },
    remover: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter((item) => item.chave !== action.payload);
    },
    abrir: (state) => {
      state.aberto = true;
    },
    fechar: (state) => {
      // depois de um pedido concluído, o carrinho volta vazio
      if (state.etapa === "confirmacao") state.itens = [];
      state.aberto = false;
      state.etapa = "carrinho";
    },
    irPara: (state, action: PayloadAction<Etapa>) => {
      state.etapa = action.payload;
    },
  },
});

export const { adicionar, remover, abrir, fechar, irPara } =
  carrinhoSlice.actions;
export default carrinhoSlice.reducer;
