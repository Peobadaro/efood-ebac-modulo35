import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { abrir } from "../../store/reducers/carrinho";
import { useAppDispatch, useAppSelector } from "../../store";
import * as S from "./styles";

const Header = () => {
  const quantidade = useAppSelector((state) => state.carrinho.itens.length);
  const dispatch = useAppDispatch();

  return (
    <S.HeaderContainer>
      <div className="container">
        <Link to="/">Restaurantes</Link>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <S.CarrinhoBotao type="button" onClick={() => dispatch(abrir())}>
          {quantidade} produto(s) no carrinho
        </S.CarrinhoBotao>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
