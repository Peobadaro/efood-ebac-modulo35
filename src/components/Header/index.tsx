import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import * as S from "./styles";

const Header = () => (
  <S.HeaderContainer>
    <div className="container">
      <Link to="/">Restaurantes</Link>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <span>0 produto(s) no carrinho</span>
    </div>
  </S.HeaderContainer>
);

export default Header;
