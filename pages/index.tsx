import { GetStaticProps } from 'next';
import HeroHeader from '../components/Header'
import CallToAction from '../components/CallToAction';
import CategoryCard from '../components/CategoryCard';
import LastCallToAction from '../components/LastCallToAction';
import { IPropsHeader } from '../components/Header'
import PostsCard from '../components/PostsCard';
import { useEffect, useState } from 'react';

export interface IPagination {
  id: number,
  post: string,
  title: string,
  mainImage: string,
}

const Home = (pagination: Array<IPagination>, header: IPropsHeader) => {

  const [headerData, setHeaderData] = useState<IPropsHeader>()

  const getHeaderData = async () => {
    const responseHeaderPost = await fetch('http://localhost:3333/post/last_post')
    const response: IPropsHeader = await responseHeaderPost.json()
    setHeaderData(response)
  }

  useEffect(() => {
    getHeaderData()
  }, [])

  return (
    <>
      <HeroHeader id={headerData?.id} post={headerData?.post} title={headerData?.title} mainImage={headerData?.mainImage} />
      <CallToAction />
      <CategoryCard />
      <LastCallToAction />
      {/* <PostsCard /> */}
    </>
  )
}

export default Home;