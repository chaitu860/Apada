import React, { Component } from 'react';
import Chart from './Chart';


class ChartDisp extends Component {
    constructor(){
      super();
      this.state = {
        chartData:{}
      }
    }
  
    componentWillMount(){
      this.getChartData();
    }
  
    getChartData(){
      // Ajax calls here
      this.setState({
        chartData:{
          labels: ['All natural disasters','Drought','Earthquake','Extreme temperature','Extreme weather','Flood','Landslide','Mass movement (dry)','Volcanic activity','Wildfire'],
          datasets:[
            {
              label:'2019',
              data:[
                11719,
                77,
                259,
                2908,
                2519,
                5100,
                719,
                17,
                21,
                116
              ],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(39, 99, 132, 0.6)',
                'rgba(67, 199, 132, 0.6)',
                'rgba(48, 58, 132, 0.6)',
                'rgba(267, 99, 182, 0.6)'
              ]
              
            }
          ]
        }
      });
    }
  
    render() {
      return (
        <div className="App" width='20' height='700'>
          <Chart chartData={this.state.chartData}  legendPosition="bottom"/>
        </div>
      );
    }
  }
  
  export default ChartDisp;
  