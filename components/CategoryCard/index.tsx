/* eslint-disable @next/next/link-passhref */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ICategory } from '../../pages/category/post/[technology]';
import { Container, CategoryTitle, FlexCard, Card, CardLayer, SvgImage, ContainerCard } from '../../styles/CategoryCard';

export interface ICardProps {
  backgroundImage: string
}

const CategoryCard = () => {

  const router = useRouter()

  const getCategories = async () => {
    const response = await fetch('http://localhost:3333/category/list')
    const data: Array<ICategory> = await response.json()
    setCategories(data)
  }

  const [categories, setCategories] = useState<Array<ICategory>>()

  useEffect(() => {
    getCategories()
  }, [])
  console.log(categories)

  return (
    <Container>
      <FlexCard>
        <ContainerCard>
          {categories?.map(({ category, imageCategory, id }) => (
            <>
              <a onClick={() => router.push(`/category/post/${category}`)}>
                <Card key={id} backgroundImage={imageCategory}>
                  <CardLayer />
                  <p>{category.split('-').join(' ')}</p>
                  <SvgImage width="63" height="67" viewBox="0 0 63 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.9581 66.5709L22.0516 64.2922C21.4319 64.0605 21.0833 63.1979 21.2576 62.374L34.4747 1.84041C34.649 1.01647 35.2978 0.553011 35.9175 0.784743L41.824 3.06344C42.4437 3.29517 42.7923 4.15773 42.618 4.98167L29.4009 65.5153C29.2169 66.3392 28.5778 66.8155 27.9581 66.5709ZM16.9197 52.1263L21.1317 46.1527C21.5771 45.5219 21.5481 44.5177 21.0542 43.9384L12.2816 33.6778L21.0542 23.4172C21.5481 22.8379 21.5868 21.8337 21.1317 21.2029L16.9197 15.2294C16.4839 14.6114 15.748 14.5728 15.2736 15.165L1.32054 32.5449C0.826708 33.15 0.826708 34.1928 1.32054 34.7979L15.2736 52.1907C15.748 52.7829 16.4839 52.7571 16.9197 52.1263ZM48.602 52.2035L62.5551 34.8107C63.0489 34.2057 63.0489 33.1629 62.5551 32.5578L48.602 15.1521C48.1373 14.5728 47.4014 14.5986 46.956 15.2165L42.7439 21.19C42.2985 21.8209 42.3275 22.825 42.8214 23.4044L51.5941 33.6778L42.8214 43.9384C42.3275 44.5177 42.2888 45.5219 42.7439 46.1527L46.956 52.1263C47.3917 52.7571 48.1276 52.7829 48.602 52.2035Z" fill="white" />
                  </SvgImage>
                </Card>
              </a>
            </>
          ))}

        </ContainerCard>
      </FlexCard>
    </Container>
  )
}

export default CategoryCard;