import { useEffect } from "react";

import type { ItemCardapio } from "../../services/api";
import { useAppDispatch } from "../../store";
import { abrir, adicionar } from "../../store/reducers/carrinho";
import { formataPreco } from "../../utils";
import * as S from "./styles";

type Props = {
  prato: ItemCardapio;
  aoFechar: () => void;
};

const Modal = ({ prato, aoFechar }: Props) => {
  const dispatch = useAppDispatch();

  const adicionarAoCarrinho = () => {
    dispatch(adicionar(prato));
    aoFechar();
    dispatch(abrir());
  };

  // Fecha com a tecla Esc e trava a rolagem da página enquanto o modal está aberto
  useEffect(() => {
    const aoApertar = (e: KeyboardEvent) => e.key === "Escape" && aoFechar();
    document.addEventListener("keydown", aoApertar);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", aoApertar);
      document.body.style.overflow = "";
    };
  }, [aoFechar]);

  return (
    <S.Overlay onClick={aoFechar} data-testid="modal-overlay">
      <S.Conteudo
        role="dialog"
        aria-modal="true"
        aria-label={prato.nome}
        onClick={(e) => e.stopPropagation()}
      >
        <S.Fechar type="button" aria-label="Fechar" onClick={aoFechar}>
          &times;
        </S.Fechar>
        <img src={prato.foto} alt={prato.nome} />
        <div>
          <S.Titulo>{prato.nome}</S.Titulo>
          <S.Texto>{prato.descricao}</S.Texto>
          <S.Texto>Serve: {prato.porcao}</S.Texto>
          <S.Botao type="button" onClick={adicionarAoCarrinho}>
            Adicionar ao carrinho - {formataPreco(prato.preco)}
          </S.Botao>
        </div>
      </S.Conteudo>
    </S.Overlay>
  );
};

export default Modal;
