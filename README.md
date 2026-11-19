# efood – Exercícios módulos 35 e 36 (EBAC)

Primeira parte do layout do efood ([Figma](https://www.figma.com/file/JjduV2Tg713TzYUUsees8b/efood)): página **Home** (lista de restaurantes) e página **Perfil** (cardápio do restaurante).

- React + TypeScript (Vite)
- Styled Components para a estilização
- React Router para a navegação entre as páginas
- Publicado no GitHub Pages: https://peobadaro.github.io/efood-ebac-modulo35/

## Como rodar

```
npm install
npm run dev
```

## Parte 2 (módulo 36) – branch `modulo-36`

- Conteúdo carregado por AJAX (`fetch`) da API https://api-ebac.vercel.app/api/efood/restaurantes
- Home lista os restaurantes da API; o Perfil busca `/restaurantes/:id`
- Modal do produto (foto, descrição, porção e preço) ao clicar em **Adicionar ao carrinho**; fecha no X, no Esc ou clicando fora
- Publicado em: https://efood-ebac-modulo36.vercel.app/

## Parte 3 (módulo 37) – branch `modulo-37`

- Carrinho em barra lateral (Figma "Carrinho") com **Redux Toolkit**
  - `store/reducers/carrinho.ts`: ações `adicionar`, `remover`, `abrir`, `fechar`
  - `selectTotal`: o valor total é a soma do preço dos produtos
- "Adicionar ao carrinho" no modal coloca o prato no carrinho e abre a barra lateral
- O cabeçalho mostra a quantidade de produtos e abre o carrinho
- Remover item pela lixeira; fecha no Esc ou clicando fora
- Publicado em: https://efood-ebac-modulo37.vercel.app/
