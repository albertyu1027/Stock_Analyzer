import React, { Component } from "react";
import "./sector_2.css";
import DataTable from 'react-data-table-component';
import API from "../../utils/API";
import BTT from "../best_to_trade";
import { Bar, Line, Pie } from 'react-chartjs-2';

  //call database for the stocks
  let industrialstocks = ['LMT', 'BA' , 'NOC', 'FDX', 'RTN', 'HON', 'AME', 'ITT', 'TPIC', 'PWR']
  let fintech = ['GS', 'SQ', 'JPM', 'BABA', 'MA', 'PYPL' ]
  let enterprisesoftware = ['MDB', 'CRM', 'AAPL', 'ORCL', 'TEAM']
  let consumerstocks = ['TSN', 'SAFM', 'KR', 'COST', 'TGT']
  let semistocks = ['NVDA' ,'MU', 'AMAT', 'LRCX', 'XLNX']
  let bestarray  = []


  const columns = [
  {
    name: 'Recession Dates',
    selector: 'dates',
    // sortable: true,
  },
  {
    name: 'Duration',
    selector: 'duration',
    // sortable: true,
    right: true,
  },
  {
    name: 'Unemployment Rate',
    selector: 'unemployment',
    // sortable: true,
    right: true,
  }
  ]

  // let finalobject = {}

//call database for a watchlist of stocks.
 
class Chart extends Component {
    constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      tableData: []
  };
}


componentDidMount() {
  // console.log(industrialstocks)
  this.tenminustwo()
  // console.log(finalobject)
  this.recessionDates()
}

recessionDates = () => {
  this.setState({
    tableData: [
      {
        dates: "1/1/1980-7/1/1980",
        duration: "0.5 years",
        unemployment: "7.8%"
      }, 
      {
        dates: "7/1/1981-11/1/1982",
        duration: "1.5 years",
        unemployment: "10.8%"
      }, 
      {
        dates: "7/1/1990-3/1/1991",
        duration: "8 Months",
        unemployment: "7.8%"
      },
      {
        dates: "3/1/2001-11/1/2001",
        duration: "8 Months",
        unemployment: "6.3%"
      },
      {
        dates: "12/1/2007-6/1/2009",
        duration: "1.5 years",
        unemployment: "10%"
      }
    ]
    })
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
          // console.log('hello')
        } else if (diff === null ){
          alert('be careful of data')
        }
    }
      // console.log(negativearray)
      // console.log(negativearraydates)
      // finalobject = Object.assign(...negativearraydates.map((k, i) =>({ [k]: negativearray[i]})))
      // console.log(finalobject)

      this.setState({
        chartData:{
          labels: negativearraydates,
          datasets:[{
            label: 'Ten Year Minus Two Year',
            data: negativearray,
            backgroundColor: 'blue'
          }]
        }
      })

  })
}

  render() {

    return (
      <div>

      <DataTable 
          title = "Recession Dates and Indicators"
          columns={columns}
          data={ this.state.tableData }/>

      <Bar 
      data={this.state.chartData}
      />
      </div>
      
    );
  }
};

export default Chart ;

