import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import type { Restaurante } from '../../data/restaurantes'
import * as S from './styles'

type Props = {
  restaurante: Restaurante
}

const RestaurantCard = ({ restaurante }: Props) => (
  <S.Card>
    <S.Imagem src={restaurante.capa} alt={restaurante.titulo} />
    <S.Tags>
      {restaurante.destaque && <Tag>Destaque da semana</Tag>}
      <Tag>{restaurante.tipo}</Tag>
    </S.Tags>
    <S.Conteudo>
      <S.Cabecalho>
        <S.Titulo>{restaurante.titulo}</S.Titulo>
        <S.Nota>
          {restaurante.avaliacao}
          <img src={estrela} alt="estrela" />
        </S.Nota>
      </S.Cabecalho>
      <S.Descricao>{restaurante.descricao}</S.Descricao>
      <S.Botao to={`/perfil/${restaurante.id}`}>Saiba mais</S.Botao>
    </S.Conteudo>
  </S.Card>
)

export default RestaurantCard
