import { useEffect } from "react";

import Checkout from "../Checkout";
import { fechar, irPara, remover } from "../../store/reducers/carrinho";
import { selectTotal, useAppDispatch, useAppSelector } from "../../store";
import { formataPreco } from "../../utils";
import * as S from "./styles";

const Cart = () => {
  const { itens, aberto, etapa } = useAppSelector((state) => state.carrinho);
  const total = useAppSelector(selectTotal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!aberto) return;
    const aoApertar = (e: KeyboardEvent) =>
      e.key === "Escape" && dispatch(fechar());
    document.addEventListener("keydown", aoApertar);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", aoApertar);
      document.body.style.overflow = "";
    };
  }, [aberto, dispatch]);

  if (!aberto) return null;

  return (
    <S.Container>
      <S.Overlay
        onClick={() => dispatch(fechar())}
        data-testid="carrinho-overlay"
      />
      <S.Sidebar aria-label="Carrinho">
        {etapa !== "carrinho" ? (
          <Checkout />
        ) : itens.length === 0 ? (
          <S.Vazio>
            Seu carrinho está vazio. Adicione pelo menos um produto para
            continuar com a compra.
          </S.Vazio>
        ) : (
          <>
            <S.Itens>
              {itens.map((item) => (
                <S.Item key={item.chave}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <S.Remover
                    type="button"
                    aria-label={`Remover ${item.nome}`}
                    onClick={() => dispatch(remover(item.chave))}
                  />
                </S.Item>
              ))}
            </S.Itens>
            <S.Total>
              <span>Valor total</span>
              <span>{formataPreco(total)}</span>
            </S.Total>
            <S.Botao type="button" onClick={() => dispatch(irPara("entrega"))}>
              Continuar com a entrega
            </S.Botao>
          </>
        )}
      </S.Sidebar>
    </S.Container>
  );
};

export default Cart;
