import { CardPost, CardPostContainer, Container, Title, CardPostHeader, CardPostBody, CardPostFooter, Hr } from '../../styles/PostsCard';

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
            <Title>Post</Title>
            <CardPostContainer>
                {pagination?.map((i) => (
                    <CardPost key={i?.id}>
                        <CardPostHeader>
                            <img src={i?.mainImage} alt={i?.title} />
                        </CardPostHeader>
                        <CardPostBody>
                            <h1>{i?.title}</h1>
                            <p>{i?.post}</p>
                        </CardPostBody>
                        <CardPostFooter>
                            <Hr />
                            <div>
                                <span className="material-icons-outlined">favorite</span>
                                <span className="material-icons-outlined">chat_bubble</span>
                                <span className="material-icons-sharp">share</span>
                            </div>
                        </CardPostFooter>
                    </CardPost>
                ))}
            </CardPostContainer>
        </Container>
    )
}

export default PostsCard;