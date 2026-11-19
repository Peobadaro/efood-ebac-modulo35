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
