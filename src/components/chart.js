import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import styled from 'styled-components';

const Row = styled.div`
`;

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          'Hugo Silva', 
          'Carlos Moura', 
          'Eliza Souza', 
          'Fernanda Oliveira', 
          'Anderson Santos' 
        ],
        datasets: [
          {
            label: 'Population',
            data: [
              20, //hugo
              5, //carlos
              20, //eliza
              15, //fernanda
              40 //anderson
            ],
            backgroundColor: [
              'rgba(44,151,222,255)', //hugo
              'rgba(66,197,170,255)', //carlos
              'rgba(156,85,184,255)', //eliza
              'rgba(199,199,199,255)', //fernanda
              'rgba(233,74,53,255)' //anderson
            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayLegend: true,
    legendPosition: 'right'
  }

  render() {
    return (
      <Row>
        <Doughnut
          data={this.state.chartData}
          width={500}
          height={300}
          options={{
            responsive: true,
            title: {
              display: true,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              fontSize: '0.24rem',
              fontColor: 'red',
            },
            layout: {
              padding: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0
              }
            }
          }}
        />
      </Row>
      )
    }
  }

  export default Chart;
  