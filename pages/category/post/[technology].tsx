import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Header from "../../../components/Header";
import CategoryPostCard, { Post } from "../../../components/CategoryPostCard";
import CallToAction from "../../../components/CallToAction";
import PostProvider from "../../posts/hook/PostContextProvider";

export interface ICategory {
    id: number,
    category: string,
    imageCategory: string,
    created_at: string,
    updated_at: string
}

interface Props {
    technology: Array<Post>
}

const Category: React.FC<Props> = ({ technology }) => {

    const [categoryPost, setCategoryPost] = useState<Array<Post>>(technology)
    const [key, setKey] = useState<number>()
    const [title, setTitle] = useState<string>()


    useEffect(() => {
        categoryPost.map(({ id }) => setKey(id))
        categoryPost.map(({ category }) => setTitle(category?.category))
    }, [categoryPost])


    return (
        <>
            <Header readMore={false} title={title} lastPostTitle={false} mainImage={'https://assets.unenvironment.org/styles/article_billboard_image/s3/2021-04/Mangroves%20credit%20Duncan%20Moore.jpeg?h=14b407d2&amp;itok=5V8fbnjx'} />
            <PostProvider>
                <CategoryPostCard posts={categoryPost} key={key} />
            </PostProvider>
            <CallToAction />
        </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('http://localhost:3333/category/list')
    const data: Array<ICategory> = await response.json()
    const paths = data.map(category => {
        return { params: { technology: category.category } }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { technology } = context.params as ParsedUrlQuery

    const response = await fetch(`http://localhost:3333/post/category/${technology}`)
    const data: Array<Post> = await response.json()

    return {
        props: {
            technology: data,
        },
        redirect: 5
    }
}

export default Category;