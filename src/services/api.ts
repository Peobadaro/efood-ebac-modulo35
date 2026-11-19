export const API_URL = "https://api-ebac.vercel.app/api/efood";

export type ItemCardapio = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
};

export type Restaurante = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: ItemCardapio[];
};

export const getRestaurantes = async (): Promise<Restaurante[]> => {
  const resposta = await fetch(`${API_URL}/restaurantes`);
  if (!resposta.ok) throw new Error("Erro ao carregar os restaurantes");
  return resposta.json();
};

export const getRestaurante = async (id: string): Promise<Restaurante> => {
  const resposta = await fetch(`${API_URL}/restaurantes/${id}`);
  if (!resposta.ok) throw new Error("Restaurante não encontrado");
  return resposta.json();
};
