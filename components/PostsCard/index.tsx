import { IPagination } from '../../pages';
import { CardPost, CardPostContainer, Container, Title, CardPostHeader, CardPostBody, CardPostFooter, Hr } from '../../styles/PostsCard';


const PostsCard = (pagination: Array<IPagination>) => {
    console.log()
    return (
        <Container >
            <Title>Post</Title>
            <CardPostContainer>
                {/* {pagination.map(({ id, post, title, mainImage }) => (
                    <CardPost key={id}>
                        <CardPostHeader>
                            <img src={mainImage} alt={title} />
                        </CardPostHeader>
                        <CardPostBody>
                            <h1>{title}</h1>
                            <p>{post}</p>
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
                ))} */}
            </CardPostContainer>
        </Container>
    )
}

export default PostsCard;