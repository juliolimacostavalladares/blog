import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 295px;

  margin: 35px 0;
  padding: 0 195px;
  flex-wrap: wrap;
  @media (max-width: 800px){
    justify-content: center;
    padding: 0 25px;
  }
  
`;

export const ContainerCallToAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ContainerTitle = styled.div`
    margin-right: 80px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
`

export const Logo = styled.svg`
  width: 55px;
  height: 55px;

  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  
  color: #fff;

  margin-right: 15px;

  background: #1E0E62;;
`;

export const Title = styled.h1`
  font-size: 25px;
  color: #1E0E62;
`;

export const SubTitle = styled.p`
  font-size: 15px;
  color: #151439;
`;

export const SingUpButton = styled.button`
  width: 170px;
  height: 60px;


  outline: none;
  border: 2px solid rgb(206, 205, 205); 
  background: #fff;
  color: #1E0E62;

  font-size: 17px;
  font-weight: bold;

  cursor: pointer;

  border-radius: 50px;
`;