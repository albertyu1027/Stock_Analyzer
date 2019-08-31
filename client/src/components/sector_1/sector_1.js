import React, { Component } from "react";
import "./sector_1.css";
import DataTable from 'react-data-table-component';
import API from "../../utils/API";


const columns = [
  {
    name: 'Market',
    selector: 'market',
    sortable: true,
  },
  {
    name: 'P/E',
    selector: 'pe',
    sortable: true,
    right: true,
  },
  {
    name: 'P/R',
    selector: 'pr',
    sortable: true,
    right: true,
  },
  {
    name: 'Profit in Mil (latest quarter)',
    selector: 'profit',
    sortable: true,
    right: true,
  },
  {
    name: 'MC (in Bil)',
    selector: 'marketcap',
    sortable: true,
    right: true,
  },
  {
    name: 'PT',
    selector: 'pt',
    sortable: true,
    right: true,
  },
  {
    name: 'Rev Gro1',
    selector: 'rg1',
    sortable: true,
    right: true,
  },
  {
    name: 'Rev Gro2',
    selector: 'rg2',
    sortable: true,
    right: true,
  },
  {
    name: 'Rev Gro3',
    selector: 'rg3',
    sortable: true,
    right: true,
  },
  {
    name: 'DCF PT',
    selector: 'dcfpt',
    sortable: true,
    right: true,
  },
  {
    name: 'PR PT',
    selector: 'prpt',
    sortable: true,
    right: true,
  },
  {
    name: 'PE PT',
    selector: 'pept',
    sortable: true,
    right: true,
  }
];


//call database for a watchlist of stocks.
 
class S1 extends Component {
    constructor(props) {
    super(props);
    this.state = {
      tableData: []
  };
}

componentDidMount() {
  //call database for the stocks
const stocksearch = ['RTN', 'LMT', 'NOC', 'BA', 'FDX']
//first stock on list. Have API.js make calls through watchlist in
  API.getQuote(stocksearch[0])
  .then(res => {

  //calculate price targets 
  //price to earnings
  const PT1 = 123

  //price to revenue
  const PT2 = 13141

  //DCF
  const PT3 = 3131

  const PT = (PT1 + PT2 + PT3)/3

    // console.log(res.data)

  API.getRevenue(stocksearch[0]).then(res2 =>{
      // console.log(res2.data)
    this.setState({
        tableData: [{
          market: res.data.symbol, 
          pe: res.data.peRatio, 
          pr: 'api call', 
          profit: (res2.data.cashflow[0].netIncome)/1000000, 
          marketcap: (res.data.marketCap/1000000000),
          pt: PT,
          rg1: 'api call',
          rg2: 'api call',
          rg3: 'api call',
          dcfpt: 'calc',
          prpt: 'calc',
          pept: 'calc'
        }]
      })
    })
  });


  API.getQuote(stocksearch[1])
  .then(res => {

  //calculate price targets 
  //price to earnings
  const PT1 = 123

  //price to revenue
  const PT2 = 13141

  //DCF
  const PT3 = 3131

  const PT = (PT1 + PT2 + PT3)/3

    // console.log(res.data)

  API.getRevenue(stocksearch[1]).then(res2 =>{
      // console.log(res2.data)
    this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res.data.symbol, 
          pe: res.data.peRatio, 
          pr: 'api call', 
          profit: (res2.data.cashflow[0].netIncome)/1000000, 
          marketcap: (res.data.marketCap/1000000000),
          pt: PT,
          rg1: 'api call',
          rg2: 'api call',
          rg3: 'api call',
          dcfpt: 'calc',
          prpt: 'calc',
          pept: 'calc'

        }]
      })
    })
  })

  API.getQuote(stocksearch[2])
  .then(res => {

  //calculate price targets 
  //price to earnings
  const PT1 = 123

  //price to revenue
  const PT2 = 13141

  //DCF
  const PT3 = 3131

  const PT = (PT1 + PT2 + PT3)/3

    // console.log(res.data)

  API.getRevenue(stocksearch[2]).then(res2 =>{
      // console.log(res2.data)
    this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res.data.symbol, 
          pe: res.data.peRatio, 
          pr: 'api call', 
          profit: (res2.data.cashflow[0].netIncome)/1000000, 
          marketcap: (res.data.marketCap/1000000000),
          pt: PT,
          rg1: 'api call',
          rg2: 'api call',
          rg3: 'api call',
          dcfpt: 'calc',
          prpt: 'calc',
          pept: 'calc'
        }]
      })
    })
  })

API.getQuote(stocksearch[3])
  .then(res => {

  //calculate price targets 
  //price to earnings
  const PT1 = 123

  //price to revenue
  const PT2 = 13141

  //DCF
  const PT3 = 3131

  const PT = (PT1 + PT2 + PT3)/3

    // console.log(res.data)

  API.getRevenue(stocksearch[3]).then(res2 =>{
      // console.log(res2.data)
    this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res.data.symbol, 
          pe: res.data.peRatio, 
          pr: 'api call', 
          profit: (res2.data.cashflow[0].netIncome)/1000000, 
          marketcap: (res.data.marketCap/1000000000),
          pt: PT,
          rg1: 'api call',
          rg2: 'api call',
          rg3: 'api call',
          dcfpt: 'calc',
          prpt: 'calc',
          pept: 'calc'
        }]
      })
    })
  })


  API.getQuote(stocksearch[4])
  .then(res => {

  //calculate price targets 
  //price to earnings
  const PT1 = 123

  //price to revenue
  const PT2 = 13141

  //DCF
  const PT3 = 3131

  const PT = (PT1 + PT2 + PT3)/3

    // console.log(res.data)

  API.getRevenue(stocksearch[4]).then(res2 =>{
      // console.log(res2.data)
    this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res.data.symbol, 
          pe: res.data.peRatio, 
          pr: 'api call', 
          profit: (res2.data.cashflow[0].netIncome)/1000000, 
          marketcap: (res.data.marketCap/1000000000),
          pt: PT,
          rg1: 'api call',
          rg2: 'api call',
          rg3: 'api call',
          dcfpt: 'calc',
          prpt: 'calc',
          pept: 'calc'
        }]
      })
    })
  })



}

  render() {
    return (
      <DataTable
        title="Industrials"
        columns={columns}
        data={ this.state.tableData }
      />
    )
  }
};

export default S1;
