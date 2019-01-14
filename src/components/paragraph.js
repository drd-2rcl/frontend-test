import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
justify-content: center;
margin-bottom: 7vh;
display: flex;
`;

const Paragraph = styled.p`
text-align: center;
margin: 0;
`;

export default () => (
  <Row>
    <Paragraph>Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis.</Paragraph>
  </Row>
);