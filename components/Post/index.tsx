import React, { useEffect, useState } from 'react';
import { Post } from '../CategoryPostCard';
import PostImage from './components/PostImage';
import formatPost from './fromatPost';
import { Heading, Paragraph, PostContent } from './styles'

interface Props {
  post: Post
}

const Posts: React.FC<Props> = ({ post }) => {
  const [textContent, setTextContent] = useState<Post>()
  useEffect(() => {
    setTextContent(post)
  })

  return (
    <>
      <PostContent>
        {formatPost(textContent)?.map(i => {
          if (i?.paragraph) return <Paragraph>{i.paragraph}</Paragraph>
          if (i?.heading) return <Heading>{i.heading}</Heading>
          if (i?.images) return <PostImage url={i.images}></PostImage>
        })}
      </PostContent>
    </>
  );
}

export default Posts;