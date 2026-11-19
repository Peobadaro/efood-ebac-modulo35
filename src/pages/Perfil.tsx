import { Navigate, useParams } from 'react-router-dom'

import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import { buscarRestaurante } from '../data/restaurantes'

const Perfil = () => {
  const { id } = useParams()
  const restaurante = buscarRestaurante(Number(id))

  if (!restaurante) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Header />
      <Banner
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
        imagem={restaurante.banner}
      />
      <ProductList pratos={restaurante.cardapio} />
    </>
  )
}

export default Perfil
