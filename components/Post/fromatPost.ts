import { Post } from "../CategoryPostCard";

export interface PostFormat {
  [key: string]: string
}

const rule = /(?<=\[-).+?(?=\-])|(?<=\{).+?(?=\})|(?<=\[~).+?(?=\~])/g

const formatPost = (post: Post | undefined): Array<PostFormat> | undefined => {
  const postFormatted = post?.post?.match(rule)?.map((i) => {
    var obj: PostFormat | undefined = {};
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
  return postFormatted
}

export default formatPost