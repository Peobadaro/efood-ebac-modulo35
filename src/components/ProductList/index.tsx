import { useState } from "react";
import styled from "styled-components";

import Modal from "../Modal";
import ProductCard from "../ProductCard";
import type { ItemCardapio } from "../../services/api";
import { breakpoints } from "../../styles";

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
`;

type Props = {
  pratos: ItemCardapio[];
};

const ProductList = ({ pratos }: Props) => {
  const [selecionado, setSelecionado] = useState<ItemCardapio | null>(null);

  return (
    <div className="container">
      <Lista>
        {pratos.map((p) => (
          <ProductCard
            key={p.id}
            prato={p}
            aoClicar={() => setSelecionado(p)}
          />
        ))}
      </Lista>
      {selecionado && (
        <Modal prato={selecionado} aoFechar={() => setSelecionado(null)} />
      )}
    </div>
  );
};

export default ProductList;
