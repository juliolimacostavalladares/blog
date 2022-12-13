import { useEffect, useState } from 'react';
import HeroHeader, { IPropsHeader } from '../components/Header'
import PostsCard, { IPagination } from '../components/PostsCard';
import CategoryCard from '../components/CategoryCard';
import CallToAction from '../components/CallToAction';
import { Container, ContainerIcons, CodeIcons, HartIcons, StarIcons, Title, SubTitle } from '../styles';
import PostProvider from './posts/hook/PostContextProvider';
const Home = () => {

  const [headerData, setHeaderData] = useState<IPropsHeader>()
  const [pagination, setPagination] = useState<Array<IPagination>>()
  const [key, setKey] = useState<number>()

  const getHeaderData = async () => {
    const responseHeaderPost = await fetch('http://localhost:3333/post/last_post')
    const response: IPropsHeader = await responseHeaderPost.json()
    setHeaderData(response)
  }

  const getPaginationData = async () => {
    const responsePagination = await fetch('http://localhost:3333/post/init=0/limit=6')
    const response: Array<IPagination> = await responsePagination.json()
    setPagination(response)
  }

  useEffect(() => {
    getHeaderData()
    getPaginationData()
  }, [])

  console.log(pagination, key)

  return (
    <>
      <HeroHeader id={headerData?.id} lastPostTitle={true} readMore={true} post={headerData?.post} title={headerData?.title} mainImage={headerData?.mainImage} />
      <PostsCard pagination={pagination} key={key} />
      <Container>
        <ContainerIcons>
          <CodeIcons className='material-icons'>code</CodeIcons>
          <HartIcons className='material-icons'>favorite</HartIcons>
          <StarIcons className='material-icons-two-tone'>star_border</StarIcons>
        </ContainerIcons>
        <Title>Lorem ipsum dolor</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur soluta optio maiores illum nemo, velit autem vel voluptatem rem, quae repudiandae necessitatibus corporis rerum. Quod ratione fuga laboriosam? Libero.
        </SubTitle>
      </Container>
      <CategoryCard />
      <CallToAction />
    </>
  )
}

export default Home;