import Hero from "../components/Hero";
import RestaurantList from "../components/RestaurantList";
import Status from "../components/Status";
import { useFetch } from "../hooks";
import { getRestaurantes } from "../services/api";

const Home = () => {
  const { dados, carregando, erro } = useFetch(getRestaurantes, "restaurantes");

  return (
    <>
      <Hero />
      {carregando && <Status>Carregando restaurantes...</Status>}
      {erro && <Status>Não foi possível carregar os restaurantes.</Status>}
      {dados && <RestaurantList restaurantes={dados} />}
    </>
  );
};

export default Home;
