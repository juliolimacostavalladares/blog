import HeroHeader, { IPropsHeader } from '../components/Header'
import PostsCard, { IPagination } from '../components/PostsCard';
import CallToAction from '../components/CallToAction';
import CategoryCard from '../components/CategoryCard';
import LastCallToAction from '../components/LastCallToAction';
import { useEffect, useState } from 'react';

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
    const responsePagination = await fetch('http://localhost:3333/post/init=0/limit=4')
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
      <HeroHeader id={headerData?.id} post={headerData?.post} title={headerData?.title} mainImage={headerData?.mainImage} />
      <CallToAction />
      <CategoryCard />
      <LastCallToAction />
      <PostsCard pagination={pagination} key={key} />
    </>
  )
}

export default Home;