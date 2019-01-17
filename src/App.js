import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react';
import styled from 'styled-components';

import Paragraph from './components/paragraph';
import Button from './components/button';
import Table from './components/table';
import Chart from './components/chart';
import Input from './components/input';
import H1 from './components/h1';

const Section = styled.section`
background-color: ${props => (props.background ? '#32C6E7' : '#fff')};
height: auto;
margin: 0;
`;

const Row = styled.div`
justify-content: center;
align-items: center;
flex-direction: row;
display: flex;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Section background>
          <Row >
            <Input />
            <Button />
          </Row>
        </Section>
        <div>
          <H1 />
          <Paragraph />
        </div>
        <Row>
          <Table />
          <Chart />
        </Row>
      </div>
    );
  }
}

export default hot(App);