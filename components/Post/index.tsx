import React, { useEffect, useState } from 'react';
import { Post } from '../CategoryPostCard';
import PostImage from './components/PostImage';
import { Heading, Paragraph, PostContent } from './styles'

interface Props {
  post: Post
}

interface PostFormat {
  [key: string]: string
}

const Posts: React.FC<Props> = ({ post }) => {
  const [textContent, setTextContent] = useState<Post>()
  useEffect(() => {
    setTextContent(post)
  })

  const rule = /(?<=\[-).+?(?=\-])|(?<=\{).+?(?=\})|(?<=\[~).+?(?=\~])/g
  const formatPost = textContent?.post?.match(rule)?.map((i) => {
    var ids = [1, 2, 3, 4]
    var obj: PostFormat = {};
    if (i.includes('<h1/>')) {
      obj['heading'] = i.replace('<h1/>', '')
    }
    if (i.includes('<p/>')) {
      obj['paragraph'] = i.replace('<p/>', '')
    }
    if (i.includes('<img/>')) {
      obj['images'] = i.replace('<img/>', '')
    }

    return obj
  })

  console.log(formatPost)


  return (
    <>
      <PostContent>
        {formatPost?.map(i => {
          if (i?.paragraph) return <Paragraph>{i.paragraph}</Paragraph>
          if (i?.heading) return <Heading>{i.heading}</Heading>
          if (i?.images) return <PostImage url={i.images}></PostImage>

        })}

      </PostContent>
    </>
  );
}

export default Posts;