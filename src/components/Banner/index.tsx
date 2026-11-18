import * as S from './styles'

type Props = {
  tipo: string
  titulo: string
  imagem: string
}

const Banner = ({ tipo, titulo, imagem }: Props) => (
  <S.BannerContainer style={{ backgroundImage: `url(${imagem})` }}>
    <div className="container">
      <S.Tipo>{tipo}</S.Tipo>
      <S.Titulo>{titulo}</S.Titulo>
    </div>
  </S.BannerContainer>
)

export default Banner
