import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background-color: #32C6E7;
border: 2px solid white;
box-sizing: border-box;
display: inline-block;
padding: 12px 20px;
align-items: left;
margin: 0;
color: #fff;
width: 10%;
cursor: pointer;
`;


export default () => (
  <Button>SEND</Button>
);