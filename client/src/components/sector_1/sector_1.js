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
    name: 'Price to Sales(MC/Annual Sales)',
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
    name: 'Others PT',
    selector: 'opt',
    sortable: true,
    right: true,
  },
  // {
  //   name: 'Rev Gro1',
  //   selector: 'rg1',
  //   sortable: true,
  //   right: true,
  // },
  // {
  //   name: 'Rev Gro2',
  //   selector: 'rg2',
  //   sortable: true,
  //   right: true,
  // },
  // {
  //   name: 'Rev Gro3',
  //   selector: 'rg3',
  //   sortable: true,
  //   right: true,
  // },
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


API.getQuote('RTN', 'LMT', 'NOC', 'BA', 'FDX').then(res => {
  // console.log(res)
  
  //calculate price targets 
  //price to earnings
  const PT1 = 123
  //price to revenue
  const PT2 = 13141
  //DCF
  const PT3 = 3131

  const PT = (PT1 + PT2 + PT3)/3
  //setState
  this.setState({
        tableData: [{
          market: res[0].data.symbol, 
          pe: res[0].data.peRatio, 
          pr: (res[0].data.marketCap)/(res[10].data), 
          profit: res[5].data.cashflow[0].netIncome/1000000, 
          marketcap: res[0].data.marketCap/1000000000,
          pt: 0,
          opt: 0,
          // rg1: 'api call',
          // rg2: 'api call',
          // rg3: 'api call',
          dcfpt: 'calc',
          prpt: 'calc',
          pept: 'calc'
        }]
      })

  this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res[1].data.symbol, 
          pe: res[1].data.peRatio, 
          pr: (res[1].data.marketCap)/(res[11].data), 
          profit: res[6].data.cashflow[0].netIncome/1000000, 
          marketcap: res[1].data.marketCap/1000000000,
          pt: 0,
          opt: 0,
          // rg1: 'api call',
          // rg2: 'api call',
          // rg3: 'api call',
          dcfpt: 'calc',
          prpt: 'calc',
          pept: 'calc'
        }]
      })

  this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res[2].data.symbol, 
          pe: res[2].data.peRatio, 
          pr: (res[2].data.marketCap)/(res[12].data), 
          profit: res[7].data.cashflow[0].netIncome/1000000, 
          marketcap: res[2].data.marketCap/1000000000,
          pt: 0,
          opt: 0,
          // rg1: 'api call',
          // rg2: 'api call',
          // rg3: 'api call',
          dcfpt: 'calc',
          prpt: 'calc',
          pept: 'calc'

        }]
      })

  this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res[3].data.symbol, 
          pe: res[3].data.peRatio, 
          pr: (res[3].data.marketCap)/(res[13].data), 
          profit: res[8].data.cashflow[0].netIncome/1000000, 
          marketcap: res[3].data.marketCap/1000000000,
          pt: 0,
          opt: 0,
          // rg1: 'api call',
          // rg2: 'api call',
          // rg3: 'api call',
          dcfpt: 'calc',
          prpt: 'calc',
          pept: 'calc'

        }]
      })

  this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res[4].data.symbol, 
          pe: res[4].data.peRatio, 
          pr: (res[4].data.marketCap)/(res[14].data), 
          profit: res[9].data.cashflow[0].netIncome/1000000, 
          marketcap: res[4].data.marketCap/1000000000,
          pt: 0,
          opt: 0,
          // rg1: 'api call',
          // rg2: 'api call',
          // rg3: 'api call',
          dcfpt: 'calc',
          prpt: 'calc',
          pept: 'calc'
        }]
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
