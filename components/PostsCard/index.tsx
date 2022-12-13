import { CardPost, CardPostContainer, Container, Title, CardPostHeader, CardPostBody } from '../../styles/PostsCard';

export interface IPagination {
    id?: number,
    post?: string,
    title?: string,
    mainImage?: string,
}

interface IProps {
    key?: number,
    pagination?: Array<IPagination>
}

const PostsCard = ({ pagination }: IProps) => {

    return (
        <Container >
            <CardPostContainer>
                {pagination?.map((i) => (
                    <CardPost key={i?.id}>
                        <CardPostHeader>
                            <img src={i?.mainImage} alt={i?.title} />
                        </CardPostHeader>
                        <CardPostBody>
                            <h1>{i?.title}</h1>
                        </CardPostBody>
                    </CardPost>
                ))}
            </CardPostContainer>
        </Container>
    )
}

export default PostsCard;