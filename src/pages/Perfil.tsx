import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import { pratos } from '../data/restaurantes'

const Perfil = () => (
  <>
    <Header />
    <Banner
      tipo="Italiana"
      titulo="La Dolce Vita Trattoria"
      imagem="https://api-ebac.vercel.app/efood/bella_tavola_italiana//capa.jpeg"
    />
    <ProductList pratos={pratos} />
  </>
)

export default Perfil
