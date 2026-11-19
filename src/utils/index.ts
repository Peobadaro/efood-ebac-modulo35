export const formataPreco = (valor = 0) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    valor,
  );

export const capitaliza = (texto: string) =>
  texto.charAt(0).toUpperCase() + texto.slice(1);

export const resume = (texto: string, limite: number) =>
  texto.length > limite ? `${texto.slice(0, limite - 3).trimEnd()}...` : texto;
