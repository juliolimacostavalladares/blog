import styled from 'styled-components';

export const PostContent = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 726px;
  margin: 76px auto;
`;

export const Heading = styled.h1`
  margin: 10px 0;
  color: #482BE7;
  font-style: italic;
`;


export const Paragraph = styled.p`
  margin: 5px 0;
  font-style: normal;
  font-weight: 100;
  font-size: 18px;
  line-height: 138.8%;
  /* or 39px */

  display: flex;
  align-items: center;

  color: #8C8C8C;
`;
