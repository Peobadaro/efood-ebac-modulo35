import type { ItemCardapio } from "../../services/api";
import { resume } from "../../utils";
import * as S from "./styles";

type Props = {
  prato: ItemCardapio;
  aoClicar: () => void;
};

const ProductCard = ({ prato, aoClicar }: Props) => (
  <S.Card>
    <S.Imagem src={prato.foto} alt={prato.nome} />
    <S.Titulo>{prato.nome}</S.Titulo>
    <S.Descricao>{resume(prato.descricao, 160)}</S.Descricao>
    <S.Botao type="button" onClick={aoClicar}>
      Adicionar ao carrinho
    </S.Botao>
  </S.Card>
);

export default ProductCard;
