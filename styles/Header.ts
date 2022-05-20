import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: table;
  height: 100vh;

`;

export const HeroContent = styled.div`
  width: 100%;
  height: 100vh;
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