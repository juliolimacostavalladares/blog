import React from 'react';

import { Container } from './styles';

interface Props {
  url: string
}

const PostImage: React.FC<Props> = ({ url }) => {
  return (
    <Container url={url} />
  );
}

export default PostImage;