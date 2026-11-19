import logo from "../../assets/logo.svg";
import * as S from "./styles";

const Instagram = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFEBD9"
    strokeWidth="2.5"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="#FFEBD9" />
  </svg>
);

const Facebook = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFEBD9">
    <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v9h4v-9h3l1-4h-4V9c0-.6.4-1 1-1z" />
  </svg>
);

const Twitter = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFEBD9">
    <path d="M23 5c-.8.4-1.7.6-2.6.7.9-.6 1.6-1.4 2-2.5-.9.5-1.9.9-2.9 1.1A4.5 4.5 0 0 0 11.8 8.4 12.8 12.8 0 0 1 2.5 3.7a4.5 4.5 0 0 0 1.4 6 4.4 4.4 0 0 1-2-.6v.1a4.5 4.5 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.7 12.8 12.8 0 0 0 7.9 20.7c8.3 0 12.8-6.9 12.8-12.8v-.6c.9-.6 1.6-1.4 2.3-2.3z" />
  </svg>
);

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <img src={logo} alt="efood" />
      <S.Redes>
        <li>
          <a href="#" title="Instagram">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="#" title="Facebook">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="#" title="Twitter">
            <Twitter />
          </a>
        </li>
      </S.Redes>
      <S.Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Texto>
    </div>
  </S.FooterContainer>
);

export default Footer;
