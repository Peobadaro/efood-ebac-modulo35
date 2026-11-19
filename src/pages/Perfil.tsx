import { useParams } from "react-router-dom";

import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Status from "../components/Status";
import { useFetch } from "../hooks";
import { getRestaurante } from "../services/api";
import { capitaliza } from "../utils";

const Perfil = () => {
  const { id = "" } = useParams();
  const { dados, carregando, erro } = useFetch(() => getRestaurante(id), id);

  return (
    <>
      <Header />
      {carregando && <Status>Carregando cardápio...</Status>}
      {erro && <Status>Restaurante não encontrado.</Status>}
      {dados && (
        <>
          <Banner
            tipo={capitaliza(dados.tipo)}
            titulo={dados.titulo}
            imagem={dados.capa}
          />
          <ProductList pratos={dados.cardapio} />
        </>
      )}
    </>
  );
};

export default Perfil;
