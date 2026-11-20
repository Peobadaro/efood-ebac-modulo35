const digitos = (valor: string) => valor.replace(/\D/g, "");

export const mascaraCep = (valor: string) =>
  digitos(valor)
    .slice(0, 8)
    .replace(/^(\d{5})(\d)/, "$1-$2");

export const mascaraCartao = (valor: string) =>
  digitos(valor)
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, "$1 ");

export const somenteNumeros = (valor: string, limite: number) =>
  digitos(valor).slice(0, limite);
