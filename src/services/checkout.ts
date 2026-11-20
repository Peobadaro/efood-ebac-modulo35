import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_URL } from "./api";

export type CheckoutPayload = {
  products: { id: number; price: number }[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: { month: number; year: number };
    };
  };
};

export type CheckoutResposta = { orderId: string };

const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    finalizarPedido: builder.mutation<CheckoutResposta, CheckoutPayload>({
      query: (body) => ({ url: "checkout", method: "POST", body }),
    }),
  }),
});

export const { useFinalizarPedidoMutation } = checkoutApi;
export default checkoutApi;
