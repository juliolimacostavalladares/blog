import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Post } from "../../components/CategoryPostCard";
import Header from "../../components/Header";
import Posts from "../../components/Post";

interface Props {
  post: Post
}

const Post: React.FC<Props> = ({ post }) => {
  console.log(post)

  return (
    <>
      <Header readMore={false} title={post.title} lastPostTitle={false} mainImage={post.mainImage} />
      <Posts post={post} />
    </>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3333/posts/list')
  const data: Array<Post> = await response.json()

  const paths = data.map(post => {
    return { params: { post_id: String(post.id) } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { post_id } = context.params as ParsedUrlQuery

  const response = await fetch(`http://localhost:3333/post/${post_id}`)
  const data: Post = await response.json()

  return {
    props: {
      post: data,
    },
    redirect: 5
  }
}

export default Post;