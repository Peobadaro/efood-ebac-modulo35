import styled from 'styled-components'

import ProductCard from '../ProductCard'
import type { Prato } from '../../data/restaurantes'
import { breakpoints } from '../../styles'

const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 56px 0 120px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

type Props = {
  pratos: Prato[]
}

const ProductList = ({ pratos }: Props) => (
  <div className="container">
    <Lista>
      {pratos.map((p) => (
        <ProductCard key={p.id} prato={p} />
      ))}
    </Lista>
  </div>
)

export default ProductList
