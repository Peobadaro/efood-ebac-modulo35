const API = 'https://api-ebac.vercel.app/efood'

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

export const restaurantes: Restaurante[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    tipo: 'Japonesa',
    destaque: true,
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    capa: `${API}/sakura_sushi_house//1.jpg`,
    banner: `${API}/sakura_sushi_house//capa.jpeg`,
    cardapio: [
      {
        id: 1,
        nome: 'Sushi e Sashimi Combinado',
        descricao:
          'Seleção de sushis e sashimis frescos de salmão, atum e peixe branco, acompanhados de gengibre, wasabi e shoyu.',
        foto: `${API}/sakura_sushi_house//1.jpg`
      },
      {
        id: 2,
        nome: 'Tempura de Legumes e Camarão',
        descricao:
          'Camarões e legumes empanados em massa leve e crocante, servidos com molho tentsuyu para mergulhar.',
        foto: `${API}/sakura_sushi_house//2.jpg`
      },
      {
        id: 3,
        nome: 'Teishoku de Tonkatsu',
        descricao:
          'Lombo suíno empanado e frito, com arroz japonês, missoshiru, salada de repolho e conservas.',
        foto: `${API}/sakura_sushi_house//3.jpg`
      }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: `${API}/bella_tavola_italiana//6.jpg`,
    banner: `${API}/bella_tavola_italiana//2.jpg`,
    cardapio: [
      {
        id: 1,
        nome: 'Pizza Marguerita',
        descricao:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        foto: `${API}/piazza//1.jpg`
      },
      {
        id: 2,
        nome: 'Pizza Quatro Queijos',
        descricao:
          'Mussarela, gorgonzola, parmesão e provolone derretidos sobre massa fina de fermentação natural.',
        foto: `${API}/piazza//2.webp`
      },
      {
        id: 3,
        nome: 'Pizza Calabresa',
        descricao:
          'Calabresa fatiada, cebola roxa e azeitonas sobre molho de tomate e mussarela. A favorita da casa!',
        foto: `${API}/piazza//3.jpg`
      },
      {
        id: 4,
        nome: 'Spaghetti alla Carbonara',
        descricao:
          'Spaghetti al dente com gema, pecorino, guanciale crocante e pimenta-do-reino moída na hora.',
        foto: `${API}/bella_tavola_italiana//2.jpg`
      },
      {
        id: 5,
        nome: 'Ravioli al Tartufo Nero',
        descricao:
          'Ravioli recheado de ricota e trufa negra, finalizado na manteiga com sálvia e parmesão.',
        foto: `${API}/bella_tavola_italiana//1.webp`
      },
      {
        id: 6,
        nome: 'Linguine Frutti di Mare',
        descricao:
          'Linguine com camarões, lulas e mexilhões ao molho de tomate, alho e salsinha fresca.',
        foto: `${API}/bella_tavola_italiana//6.jpg`
      }
    ]
  },
  {
    id: 3,
    titulo: 'Casa das Delícias Árabes',
    tipo: 'Árabe',
    avaliacao: 4.8,
    descricao:
      'Sabores do Oriente Médio na sua mesa: mezzes, grelhados e shawarmas preparados com especiarias tradicionais e receitas de família. Peça e viaje sem sair de casa!',
    capa: `${API}/casa_delicias_arabes//1.jpg`,
    banner: `${API}/casa_delicias_arabes//capa.jpeg`,
    cardapio: [
      {
        id: 1,
        nome: 'Mezze Platter',
        descricao:
          'Homus, babaganuche, coalhada seca, tabule e falafel, servidos com pão sírio quentinho.',
        foto: `${API}/casa_delicias_arabes//1.jpg`
      },
      {
        id: 2,
        nome: 'Kebab de Cordeiro',
        descricao:
          'Espetinhos de cordeiro temperados com especiarias árabes, com arroz com lentilha e salada.',
        foto: `${API}/casa_delicias_arabes//2.jpg`
      },
      {
        id: 3,
        nome: 'Shawarma de Frango',
        descricao:
          'Frango marinado e grelhado no pão sírio com molho de alho, picles e vegetais frescos.',
        foto: `${API}/casa_delicias_arabes//3.webp`
      }
    ]
  },
  {
    id: 4,
    titulo: 'Cantinho Lusitano',
    tipo: 'Portuguesa',
    avaliacao: 4.8,
    descricao:
      'O melhor da cozinha portuguesa com bacalhau, arroz de pato e petiscos tradicionais. Pratos generosos, feitos como em Portugal, entregues no conforto do seu lar.',
    capa: `${API}/cantinho_lusitano//1.jpeg`,
    banner: `${API}/cantinho_lusitano//capa.jpeg`,
    cardapio: [
      {
        id: 1,
        nome: 'Bacalhau à Gomes de Sá',
        descricao:
          'Lascas de bacalhau com batatas, cebola, ovos cozidos e azeitonas pretas, regados a azeite.',
        foto: `${API}/cantinho_lusitano//1.jpeg`
      },
      {
        id: 2,
        nome: 'Arroz de Pato',
        descricao:
          'Arroz cremoso com pato desfiado e fatias de chouriço, gratinado no forno.',
        foto: `${API}/cantinho_lusitano//2.jpg`
      },
      {
        id: 3,
        nome: 'Alheira de Mirandela',
        descricao:
          'Alheira grelhada com batata frita, ovo estrelado e grelos salteados no alho.',
        foto: `${API}/cantinho_lusitano//3.png`
      }
    ]
  },
  {
    id: 5,
    titulo: 'Bella Tavola Italiana',
    tipo: 'Italiana',
    avaliacao: 4.7,
    descricao:
      'Cozinha italiana tradicional com risotos, carnes e clássicos da nonna, feitos com ingredientes selecionados. Uma experiência de trattoria entregue na sua casa.',
    capa: `${API}/bella_tavola_italiana//3.jpg`,
    banner: `${API}/bella_tavola_italiana//4.jpg`,
    cardapio: [
      {
        id: 1,
        nome: 'Risotto ai Funghi Porcini',
        descricao:
          'Arroz arbóreo cremoso com cogumelos porcini, parmesão e um toque de vinho branco.',
        foto: `${API}/bella_tavola_italiana//3.jpg`
      },
      {
        id: 2,
        nome: 'Ossobuco alla Milanese',
        descricao:
          'Ossobuco cozido lentamente no vinho e tomate, servido com gremolata e risoto de açafrão.',
        foto: `${API}/bella_tavola_italiana//4.jpg`
      },
      {
        id: 3,
        nome: 'Melanzane alla Parmigiana',
        descricao:
          'Camadas de berinjela, molho de tomate, mussarela e parmesão, gratinadas no forno.',
        foto: `${API}/bella_tavola_italiana//5.jpg`
      },
      {
        id: 4,
        nome: 'Insalata Caprese',
        descricao:
          'Tomate maduro, mussarela de búfala, manjericão fresco, azeite extravirgem e flor de sal.',
        foto: `${API}/bella_tavola_italiana//7.jpg`
      }
    ]
  },
  {
    id: 6,
    titulo: 'Jardim da Terra',
    tipo: 'Vegana',
    avaliacao: 4.8,
    descricao:
      'Comida vegana saborosa e colorida, com ingredientes frescos e muito sabor. Hambúrgueres, bowls e massas 100% vegetais, preparados com carinho para você.',
    capa: `${API}/jardim_terra//3.jpg`,
    banner: `${API}/jardim_terra//capa.png`,
    cardapio: [
      {
        id: 1,
        nome: 'Hambúrguer de Grão-de-Bico',
        descricao:
          'Hambúrguer artesanal de grão-de-bico no pão integral, com alface, tomate e maionese vegana.',
        foto: `${API}/jardim_terra//1.webp`
      },
      {
        id: 2,
        nome: 'Lasanha de Berinjela',
        descricao:
          'Lâminas de berinjela intercaladas com molho de tomate caseiro e queijo vegetal gratinado.',
        foto: `${API}/jardim_terra//2.jpeg`
      },
      {
        id: 3,
        nome: 'Bowl de Cogumelos e Quinoa',
        descricao:
          'Quinoa, cogumelos salteados, legumes assados, folhas verdes e molho de tahine.',
        foto: `${API}/jardim_terra//3.jpg`
      }
    ]
  }
]

export const buscarRestaurante = (id: number) =>
  restaurantes.find((restaurante) => restaurante.id === id)
