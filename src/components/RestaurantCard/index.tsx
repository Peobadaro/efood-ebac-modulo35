import Tag from '../Tag'
import type { Restaurante } from '../../data/restaurantes'
import * as S from './styles'

const Estrela = () => (
  <svg width="21" height="21" viewBox="0 0 24 24" fill="#FFB930">
    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
  </svg>
)

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
          <Estrela />
        </S.Nota>
      </S.Cabecalho>
      <S.Descricao>{restaurante.descricao}</S.Descricao>
      <S.Botao to={`/perfil/${restaurante.id}`}>Saiba mais</S.Botao>
    </S.Conteudo>
  </S.Card>
)

export default RestaurantCard
