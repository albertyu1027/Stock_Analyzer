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
let beststock1;


API.getQuote('RTN', 'LMT', 'NOC', 'BA', 'FDX').then(res => {
  console.log(res)


  //function to rank the best stock
  const rankingfunction = (a, b) => {
    // console.log(a + b);

    for (var i=0; i<5; i++) {
      //first look for the stock with lowest PE and PEG
      let lowestPE = Math.min(res[i].data.peRatio)
      // let lowestPEG = Math.min(res[i].data.pegRatio)
      console.log(lowestPE)
      if (lowestPE === res[i].data.peRatio && lowestPE>0){
      beststock1 = res[i].data.symbol
      console.log(beststock1)
      return beststock1
      }
      else {console.log('no')}
    }



  for (var i=0; i<5; i++) {
    
    // console.log(res[i].data.peRatio)

    // if (res[i].data.peRatio < res[i+1].data.peRatio) 
    // {
    //   console.log(res[i].data.symbol)
    //   return
    // }
    // else 
    // {
    //   console.log('good')
    //   return
    // }
  }
    

    beststock1 = 're3223'
    console.log(beststock1)
  
  }

  rankingfunction(4,6)
 
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
          market: res[0].data.symbol, 
          pe: res[0].data.peRatio, 
          peg: res[5].data.pegRatio,
          pr: res[5].data.priceToSales, 
          profit: (res[5].data.profitMargin).toFixed(2), 
          marketcap: (res[0].data.marketCap/1000000000).toFixed(2),
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
          market: res[1].data.symbol, 
          pe: res[1].data.peRatio, 
          peg: res[6].data.pegRatio,
          pr: res[6].data.priceToSales, 
          profit: (res[6].data.profitMargin).toFixed(2), 
          marketcap: (res[1].data.marketCap/1000000000).toFixed(2),
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
          market: res[2].data.symbol, 
          pe: res[2].data.peRatio, 
          peg: res[7].data.pegRatio,
          pr: res[7].data.priceToSales, 
          profit: (res[7].data.profitMargin).toFixed(2), 
          marketcap: (res[2].data.marketCap/1000000000).toFixed(2),
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
          market: res[3].data.symbol, 
          pe: res[3].data.peRatio, 
          peg: res[8].data.pegRatio,
          pr: res[8].data.priceToSales, 
          profit: (res[8].data.profitMargin).toFixed(2), 
          marketcap: (res[3].data.marketCap/1000000000).toFixed(2),
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
          market: res[4].data.symbol, 
          pe: res[4].data.peRatio, 
          peg: res[9].data.pegRatio,
          pr: res[9].data.priceToSales, 
          profit: (res[9].data.profitMargin).toFixed(2), 
          marketcap: (res[4].data.marketCap/1000000000).toFixed(2),
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
