import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: table;
  height: 70vh;
  position: relative;
`;

export const Layer = styled.div`
    background: #000000a6;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    z-index: -1;
`;

export const HeroContent = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  color:#fff;

  > h1 {
    font-size: 60px;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  > p {
    font-size: 22px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

 >  button:hover {
    background: #ddd;
  }

  > button {
    width: 170px;
    height: 60px;

    margin-top: 35px;

    border-radius: 50px;

    outline: none;
    border:none;
    cursor: pointer;

    color: #482BE7;
    font-weight: 800;
    font-size: 20px;
    background: rgb(240, 240, 240)
  }

`;

export const Logo = styled.svg`
  width: 55px;
  height: 55px;
  position: absolute;
  border-radius: 15px;
  top: 15px;

  cursor: pointer;
  color: #fff;
  background: #1E0E62;;
`;