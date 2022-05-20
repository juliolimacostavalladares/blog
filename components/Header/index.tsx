import { Container, HeroContent } from "../../styles/Header"

export interface IPropsHeader {
  id?: number,
  post?: string,
  title?: string,
  mainImage?: string,
}

const Header = (props: IPropsHeader) => {
  return (
    <Container>
      <HeroContent style={{ backgroundImage: `url(${props.mainImage})`, backgroundRepeat: 'no-repeat' }}>
        <h2>Último Post:</h2>
        <h1>{props.title}</h1>
        <p>{props.post}</p>
        <button>Ler Mais</button>
      </HeroContent>
    </Container>

  );
}
export default Header



