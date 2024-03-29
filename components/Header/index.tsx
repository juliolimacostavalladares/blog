import Link from "next/link";
import { Container, HeroContent, Layer, Logo } from "../../styles/Header"

export interface IPropsHeader {
  id?: number,
  post?: string,
  title?: string,
  mainImage?: string,
  lastPostTitle: boolean,
  readMore: boolean,
}

const Header = (props: IPropsHeader) => {
  return (
    <Container>
      <HeroContent style={{ backgroundImage: `url(${props.mainImage})`, backgroundRepeat: 'no-repeat' }}>
        <Link href={'/'} passHref>
          <Logo xmlns="http://www.w3.org/2000/svg" width="254" height="254" viewBox="0 0 254 254" fill="none">
            <path d="M0 0H254V254H0V0Z" fill="#22116B" />
            <path d="M104.117 41.7666L121.758 53.637L151.105 211.983L132.972 197.451L104.117 41.7666Z" fill="#9D1ACB" />
            <path d="M180.314 185.369H156.826L201.564 114.905L156.826 81.3514L180.314 70.1667L234 114.905L180.314 185.369Z" fill="#EF0A88" />
            <path d="M73.6864 70.1667H97.1742L52.4355 140.63L97.1742 174.184L73.6864 185.369L20 140.63L73.6864 70.1667Z" fill="#EF0A88" />
          </Logo>
        </Link>
        {props.lastPostTitle && <h2>Último Post:</h2>}
        {props.readMore == false ? <h1 style={{ textAlign: "center", textTransform: 'capitalize' }}>{props?.title?.split('-').join(' ')}</h1> : <h1>{props?.title}</h1>}
        {props.readMore && <button>Ler Mais</button>}
        <Layer />
      </HeroContent>
    </Container>

  );
}
export default Header



