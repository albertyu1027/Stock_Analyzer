import React, { Component } from "react";
import "./sector_2.css";
import DataTable from 'react-data-table-component';
import API from "../../utils/API";
import BTT from "../best_to_trade";

import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


  //call database for the stocks
  let industrialstocks = ['LMT', 'BA' , 'NOC', 'FDX', 'RTN', 'HON', 'AME', 'ITT', 'TPIC', 'PWR']
  let fintech = ['GS', 'SQ', 'JPM', 'BABA', 'MA', 'PYPL' ]
  let enterprisesoftware = ['MDB', 'CRM', 'AAPL', 'ORCL', 'TEAM']
  let consumerstocks = ['TSN', 'SAFM', 'KR', 'COST', 'TGT']
  let semistocks = ['NVDA' ,'MU', 'AMAT', 'LRCX', 'XLNX']
  let bestarray  = []

  let finalobject = {}


//call database for a watchlist of stocks.
 
class S2 extends Component {
    constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      stockarray: []
  };
}


componentDidMount() {
  console.log(industrialstocks)
  // this.tenminustwo()
  console.log(finalobject)

}

tenminustwo = () => {
  API.getInterestRateData().then(res=>{
    console.log(res)

    let negativearraydates = []
    let negativearray = []

    for (var i=0; i< 10000; i++) {

    let one = res[0].data.dataset.data[i]
    let two = res[1].data.dataset.data[i]
    let diff = one[1]-two[1]

    if (diff < 0) {
      negativearraydates.push(one[0])
      negativearray.push(diff)

    } else if (diff > 0) {
      console.log('hello')
    } else if (diff === null ){
      alert('be careful of data')
    }

    }
      // console.log(negativearray)
      // console.log(negativearraydates)
      finalobject = Object.assign(...negativearraydates.map((k, i) =>({ [k]: negativearray[i]})))
      console.log(finalobject)

  })
}

  render() {
   

    const options = {
      animationEnabled: true,
      title:{
        text: "Ten Year Minus Two Year"
      },
      // axisX: {
      //   valueFormatString: "MM/MM/MM"
      // },
      // axisY: {
      //   title: "10y - 2y Treasury",
      //   prefix: "",
      //   includeZero: false
      // },
      data: [{
        // yValueFormatString: "-#.####",
        // xValueFormatString: '',
        type: "column",
        dataPoints: [
          { x:  10 , y: -0.005 },
          { x:  11 , y: -0.003 },
          { x:  12 , y: -0.004 },
          { x:  13 , y: -0.005 },
          { x:  14 , y: -0.003 },
          { x:  15 , y: -0.004 },
          { x:  16 , y: -0.006 },
          { x:  17 , y: -0.007 },
          { x:  18 , y: -0.005 },
          { x:  19 , y: -0.008 },
          { x:  20 , y: -0.008 },
          { x:  21 , y: -0.005 }
        ]
      }]
    }
    return (
    <div>
      <CanvasJSChart options = {options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
    );
  }
};

export default S2 ;

