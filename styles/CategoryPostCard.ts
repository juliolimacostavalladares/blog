import styled from 'styled-components';

interface IStyles {
    url?: string,
    textAlign?: boolean
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 30px 90px;
    margin: 80px 0;
    width: 100%;
    height: 253px;

    
`;

export const PostContainer = styled.div`
    padding: 20px;
    width: 100%;

    > h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        @media (max-width: 620px){
            overflow: hidden; 
            text-overflow: ellipsis; 
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        :hover {
            text-decoration: underline;
        }
        
        text-align: center;
        text-overflow: ellipsis;
        font-weight: 600;
        font-size: 40px;
        line-height: 80px;

        color: #482BE7;
    }


    > p {
        font-style: normal;
        font-weight: 400;
        display: flex;
        text-align: center;
        align-items: center;

        overflow: hidden; 
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        color: #AAAAAA;

        > span {
            margin: 0 5px;
            font-weight: 600;

            color: #000;
        }
    }
`;

export const ImagePost = styled.div<IStyles>`
        @media (max-width: 620px){
            display: none;
        }

        cursor: pointer;

        width: 220px;
        height: 100%;
        

        background: url(${props => props.url ? props.url : 'https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'});

        filter: drop-shadow(3px 23px 50px rgba(0, 0, 0, 0.27)) drop-shadow(6px 8px 20px rgba(30, 14, 98, 0.35));
        border-radius: 7px;
`;
