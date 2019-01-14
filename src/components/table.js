import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
`;

const Table = styled.table`
border-collapse: collapse;
color: #696969;
`;

const Tr = styled.tr``;

const Th = styled.th`
border: 2px solid #ddd;
padding: 1rem 3rem 1rem 0.3rem; 
text-align: left;
`;

const Td = styled.td`
padding: ${props => (props.none ? '1rem 0.5rem 1rem 0.2rem' : '1rem 7rem 1rem 0.3rem')}; 
text-align: ${props => (props.number ? 'center' : 'left')};
border: 2px solid #ddd;
`;

export default () => (
  <Row>
    <Table>
      
      <Tr>
        <Th />
        <Th>Firs name</Th>
        <Th>Last name</Th>
        <Th>Participation</Th>
      </Tr>

      <Tr>
        <Td none number>1</Td>
        <Td left>Carlos</Td>
        <Td left>Moura</Td>
        <Td number>5%</Td>
      </Tr>

      <Tr>
        <Td none number>2</Td>
        <Td left>Fernanda</Td>
        <Td left>Oliveira</Td>
        <Td number>15%</Td>
      </Tr>

      <Tr>
        <Td none number>3</Td>
        <Td left>Hugo</Td>
        <Td left>Silva</Td>
        <Td number>20%</Td>
      </Tr>

      <Tr>
        <Td none number>4</Td>
        <Td left>Eliza</Td>
        <Td left>Souza</Td>
        <Td number>20%</Td>
      </Tr>

      <Tr>
        <Td none number>5</Td>
        <Td left>Anderson </Td>
        <Td left>Santos</Td>
        <Td number>40%</Td>
      </Tr>

    </Table>
  </Row>
);