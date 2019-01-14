import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
text-align: center;
margin: 0;
`;

const Row = styled.div`
justify-content: center;
margin: 7vh 0 2vh 0;
display: flex;
`;

export default () => (
  <Row>
    <H1>DATA</H1>
  </Row>
);