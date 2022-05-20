import { Container, ContainerIcons, CodeIcons, HartIcons, StarIcons, Title, SubTitle } from '../../styles/CallToAction';

const CallToAction = () => {
    return (
        <Container>
            <ContainerIcons>
                <CodeIcons className='material-icons'>code</CodeIcons>
                <HartIcons className='material-icons'>favorite</HartIcons>
                <StarIcons className='material-icons-two-tone'>star_border</StarIcons>
            </ContainerIcons>
            <Title>Lorem ipsum dolor</Title>
            <SubTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur soluta optio maiores illum nemo, velit autem vel voluptatem rem, quae repudiandae necessitatibus corporis rerum. Quod ratione fuga laboriosam? Libero.
            </SubTitle>
        </Container>
    );
}

export default CallToAction