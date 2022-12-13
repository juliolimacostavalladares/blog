import styled from 'styled-components';

interface IUrl {
  url: string
}

export const Container = styled.div<IUrl>`
  margin: 42px 0px;
  width: 754px;
  height: 388px;

  background: bottom right  url(${props => props.url}), #C4C4C4;
  /* Shadow */

  box-shadow: 3px 23px 50px rgba(0, 0, 0, 0.27), 6px 8px 20px rgba(30, 14, 98, 0.35);
  border-radius: 7px;
`;
