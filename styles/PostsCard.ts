import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #1E0E62;

  margin-bottom: 60px;
`;

export const CardPostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  max-width: 1200px;
`;


export const CardPost = styled.div`
  width: 365px;
  height: 300px;
  
  margin: 15px;

  cursor: pointer;

  background-image: url('https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png');

  border-radius: 10px;
  position: relative;
`;

export const CardPostHeader = styled.div`
    width: 55px;
    height: 55px;

    > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        margin: 20px  20px;

    }

    margin-bottom: 80px;
    z-index: 1;

`

export const CardPostBody = styled.div`
  > h1 {
      width: 325px;
      font-size: 33px;
      letter-spacing: 3px;
      margin: 0 20px;
      color: #fff;

      overflow: hidden; 
      text-overflow: ellipsis; 
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
  }

  > p{
    margin: 80px 20px 0;
    font-weight: 200;
    color: #fff;
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical; 
  }
`
export const CardPostFooter = styled.div`
  > div  {
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
      > span {
        cursor: pointer;
        font-size: 30px;
        color: #fff;
      }
  }

`
