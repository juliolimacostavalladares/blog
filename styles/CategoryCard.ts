import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    margin: 0px 185px;
`;

export const CategoryTitle = styled.h1`
    margin: 40px 0;
    color: #1E0E62;
`

export const FlexCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Card = styled.div`

    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    padding: 0 20px;

    cursor: pointer;

    width: 470px;
    height:  192px;
    border-radius: 15px;

    > p {
        color: white;
        font-weight: bold;
        z-index: 1;
        font-size: 45px;
    }


    background-image: url('https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png');
    background-position: center center;

    margin: 10px;
`

export const SvgImage = styled.svg`
    z-index: 1;
`

export const CardLayer = styled.div`
    background: rgba(72, 43, 231, 0.58);
    
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border-radius: 15px;

`
