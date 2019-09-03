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
    name: 'PEG',
    selector: 'peg',
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
  // {
  //   name: 'DCF PT',
  //   selector: 'dcfpt',
  //   sortable: true,
  //   right: true,
  // },
  // {
  //   name: 'PR PT',
  //   selector: 'prpt',
  //   sortable: true,
  //   right: true,
  // },
  // {
  //   name: 'PE PT',
  //   selector: 'pept',
  //   sortable: true,
  //   right: true,
  // }
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

let bestpick;
let beststock;
let stockarray = ['GOOG', 'FB', 'tsla' , 'baba', 'NFLX']

API.getQuote(
  stockarray[0],
  stockarray[1],
  stockarray[2],
  stockarray[3],
  stockarray[4],

  ).then(res => {
  // console.log(res)


  //function to rank the best stock
  const rankingfunction = () => {
    // console.log(a + b);

      const array = []

      for (var a=0; a<5; a++) {
        if (res[a].data.pegRatio > 0 && 
            res[a].data.profitMargin > 0) 
            {
             bestpick = Math.min(res[a].data.pegRatio)
             beststock = res[a].data.companyName
            }
      }

      // console.log(bestpick)
      // console.log(beststock)

      }
  

  rankingfunction()
 
  // //calculate price targets 
  // //price to earnings
  // const PT1 = 123

  // //price to revenue
  // const PR = 1234
  // // console.log(PR)

  // //DCF
  // const PT3 = 3131

  // const PT = (PT1 + PR + PT3)/3

  //setState
  this.setState({
        tableData: [{
          market: res[5].data.symbol, 
          pe: res[0].data.peRatio, 
          peg: res[0].data.pegRatio,
          pr: res[0].data.priceToSales, 
          profit: (res[0].data.profitMargin).toFixed(2), 
          marketcap: (res[0].data.marketcap/1000000000).toFixed(2),
          pt: 0,
          opt: res[10].data,
          // rg1: 'api call',
          // rg2: 'api call',
          // rg3: 'api call',
          // dcfpt: 'calc',
          // prpt: 'calc',
          // pept: 'calc'
        }]
      })

  this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res[6].data.symbol, 
          pe: res[1].data.peRatio, 
          peg: res[1].data.pegRatio,
          pr: res[1].data.priceToSales, 
          profit: (res[1].data.profitMargin).toFixed(2), 
          marketcap: (res[1].data.marketcap/1000000000).toFixed(2),
          pt: 0,
          opt: res[11].data,
          // rg1: 'api call',
          // rg2: 'api call',
          // rg3: 'api call',
          // dcfpt: 'calc',
          // prpt: 'calc',
          // pept: 'calc'
        }]
      })

  this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res[7].data.symbol, 
          pe: res[2].data.peRatio, 
          peg: res[2].data.pegRatio,
          pr: res[2].data.priceToSales, 
          profit: (res[2].data.profitMargin).toFixed(2), 
          marketcap: (res[2].data.marketcap/1000000000).toFixed(2),
          pt: 0,
          opt: res[12].data,
          // rg1: 'api call',
          // rg2: 'api call',
          // rg3: 'api call',
          // dcfpt: 'calc',
          // prpt: 'calc',
          // pept: 'calc'

        }]
      })

  this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res[8].data.symbol, 
          pe: res[3].data.peRatio, 
          peg: res[3].data.pegRatio,
          pr: res[3].data.priceToSales, 
          profit: (res[3].data.profitMargin).toFixed(2), 
          marketcap: (res[3].data.marketcap/1000000000).toFixed(2),
          pt: 0,
          opt: res[13].data,
          // rg1: 'api call',
          // rg2: 'api call',
          // rg3: 'api call',
          // dcfpt: 'calc',
          // prpt: 'calc',
          // pept: 'calc'

        }]
      })

  this.setState({
        tableData: [...this.state.tableData, 
        {
          market: res[9].data.symbol, 
          pe: res[4].data.peRatio, 
          peg: res[4].data.pegRatio,
          pr: res[4].data.priceToSales, 
          profit: (res[4].data.profitMargin).toFixed(2), 
          marketcap: (res[4].data.marketcap/1000000000).toFixed(2),
          pt: 0,
          opt: res[14].data,
          // rg1: 'api call',
          // rg2: 'api call',
          // rg3: 'api call',
          // dcfpt: 'calc',
          // prpt: 'calc',
          // pept: 'calc'
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
