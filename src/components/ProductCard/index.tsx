import type { Prato } from '../../data/restaurantes'
import * as S from './styles'

type Props = {
  prato: Prato
}

const ProductCard = ({ prato }: Props) => (
  <S.Card>
    <S.Imagem src={prato.foto} alt={prato.nome} />
    <S.Titulo>{prato.nome}</S.Titulo>
    <S.Descricao>{prato.descricao}</S.Descricao>
    <S.Botao type="button">Adicionar ao carrinho</S.Botao>
  </S.Card>
)

export default ProductCard
