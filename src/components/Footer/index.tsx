import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <img src={logo} alt="efood" />
      <S.Redes>
        <li>
          <a href="#" title="Instagram">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#" title="Facebook">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#" title="Twitter">
            <img src={twitter} alt="Twitter" />
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
)

export default Footer
