const API = 'https://api-ebac.vercel.app/efood'

export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  destaque?: boolean
  avaliacao: number
  descricao: string
  capa: string
}

export type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
}

const sushi: Restaurante = {
  id: 1,
  titulo: 'Hioki Sushi',
  tipo: 'Japonesa',
  destaque: true,
  avaliacao: 4.9,
  descricao:
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
  capa: `${API}/sakura_sushi_house//1.jpg`
}

const italiana = (id: number): Restaurante => ({
  id,
  titulo: 'La Dolce Vita Trattoria',
  tipo: 'Italiana',
  avaliacao: 4.6,
  descricao:
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  capa: `${API}/bella_tavola_italiana//6.jpg`
})

export const restaurantes: Restaurante[] = [
  sushi,
  italiana(2),
  italiana(3),
  italiana(4),
  italiana(5),
  italiana(6)
]

export const pratos: Prato[] = [1, 2, 3, 4, 5, 6].map((id) => ({
  id,
  nome: 'Pizza Marguerita',
  descricao:
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  foto: `${API}/piazza//1.jpg`
}))
