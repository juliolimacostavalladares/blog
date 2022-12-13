import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { PostContext } from '../../pages/posts/hook/PostContextProvider';
import { Container, PostContainer, ImagePost } from '../../styles/CategoryPostCard';

export interface Post {
  id?: number,
  title?: string,
  author?: string,
  category?: Category,
  mainImage?: string,
  post?: string
  images?: Array<string>
}

interface Category {
  id?: number,
  category?: string,
  created_at?: string,
  updated_at?: string,
}

interface IProps {
  key?: number,
  posts?: Array<Post>
}

const CategoryPostCard = ({ posts }: IProps) => {
  const router = useRouter()

  const idEvenOrOdd = (id: number) => {
    if (id & 1) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      {posts?.map(i => (
        <Container key={i.id}>
          {!idEvenOrOdd(i.id as number) &&
            <ImagePost onClick={() => router.push(`/posts/${i.id}`)} />
          }
          <PostContainer>
            <h1 onClick={() => router.push(`/posts/${i.id}`)} >{i.title}</h1>
            <p><span>{i.author} | {i.category?.category?.split('_').join(' ')}</span> {i.post}</p>
          </PostContainer>
          {idEvenOrOdd(i.id as number) &&
            <ImagePost onClick={() => router.push(`/posts/${i.id}`)} />
          }
        </Container>
      ))}
    </>
  )
}

export default CategoryPostCard;