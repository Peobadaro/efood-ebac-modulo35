import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import carrinhoReducer from "./reducers/carrinho";

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// soma do preço de todos os produtos do carrinho
export const selectTotal = (state: RootState) =>
  state.carrinho.itens.reduce((total, item) => total + item.preco, 0);
