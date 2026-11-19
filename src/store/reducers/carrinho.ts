import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { ItemCardapio } from "../../services/api";

export type ItemCarrinho = ItemCardapio & { chave: string };

type CarrinhoState = {
  itens: ItemCarrinho[];
  aberto: boolean;
};

const initialState: CarrinhoState = {
  itens: [],
  aberto: false,
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
      state.aberto = false;
    },
  },
});

export const { adicionar, remover, abrir, fechar } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
