import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
border: 1px solid #ccc;
box-sizing: border-box;
display: inline-block;
align-items: center;
border-radius: 2px;
padding: 12px 20px;
margin: 8px 5px;
width: 40%;
`;

const Row = styled.div`
justify-content: center;
align-items: center;
margin-top: 18px 0;
display: flex;

`;


export default () => (
  <Row>
    <Input placeholder="First name"/>
    <Input placeholder="Last name"/>
    <Input placeholder="Participation"/>
  </Row>
);
