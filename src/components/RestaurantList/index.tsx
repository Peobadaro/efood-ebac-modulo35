import styled from "styled-components";

import RestaurantCard from "../RestaurantCard";
import type { Restaurante } from "../../services/api";
import { breakpoints } from "../../styles";

const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  padding: 80px 0 120px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    column-gap: 0;
  }
`;

type Props = {
  restaurantes: Restaurante[];
};

const RestaurantList = ({ restaurantes }: Props) => (
  <div className="container">
    <Lista>
      {restaurantes.map((r) => (
        <RestaurantCard key={r.id} restaurante={r} />
      ))}
    </Lista>
  </div>
);

export default RestaurantList;
