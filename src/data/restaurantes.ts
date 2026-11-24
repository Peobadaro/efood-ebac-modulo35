import sushi from '../assets/images/sushi.png'
import macarrao from '../assets/images/macarrao.png'
import pizza from '../assets/images/pizza.png'
import bannerHioki from '../assets/images/banner-hioki-sushi.png'
import bannerLaDolceVita from '../assets/images/banner-la-dolce-vita.png'

export type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
}

export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  destaque?: boolean
  avaliacao: number
  descricao: string
  capa: string
  banner: string
  cardapio: Prato[]
}

// Textos copiados do layout do Figma
const descricaoHioki =
  'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'

const descricaoLaDolceVita =
  'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'

const descricaoMarguerita =
  'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'

// Perfil do modelo: seis cards de Pizza Marguerita
const cardapioItaliano: Prato[] = [1, 2, 3, 4, 5, 6].map((id) => ({
  id,
  nome: 'Pizza Marguerita',
  descricao: descricaoMarguerita,
  foto: pizza
}))

const cardapioJapones: Prato[] = [1, 2, 3, 4, 5, 6].map((id) => ({
  id,
  nome: 'Combinado de Sushi',
  descricao:
    'Seleção de sushis frescos de salmão com cream cheese, acompanhados de gengibre, wasabi e shoyu.',
  foto: sushi
}))

const laDolceVita = (id: number): Restaurante => ({
  id,
  titulo: 'La Dolce Vita Trattoria',
  tipo: 'Italiana',
  avaliacao: 4.6,
  descricao: descricaoLaDolceVita,
  capa: macarrao,
  banner: bannerLaDolceVita,
  cardapio: cardapioItaliano
})

// Mesma composição e sequência da Home do Figma:
// Hioki Sushi + cinco cards repetidos da La Dolce Vita Trattoria
export const restaurantes: Restaurante[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    tipo: 'Japonesa',
    destaque: true,
    avaliacao: 4.9,
    descricao: descricaoHioki,
    capa: sushi,
    banner: bannerHioki,
    cardapio: cardapioJapones
  },
  laDolceVita(2),
  laDolceVita(3),
  laDolceVita(4),
  laDolceVita(5),
  laDolceVita(6)
]

export const buscarRestaurante = (id: number) =>
  restaurantes.find((r) => r.id === id)
