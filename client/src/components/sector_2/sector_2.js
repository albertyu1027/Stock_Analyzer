import React, { Component } from "react";
import "./sector_2.css";
import DataTable from 'react-data-table-component';
import API from "../../utils/API";
import BTT from "../best_to_trade";


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
    name: 'Current Ratio',
    selector: 'cr',
    sortable: true,
    right: true,
  },
  {
    name: 'Others PT',
    selector: 'opt',
    sortable: true,
    right: true,
  }
];

  //call database for the stocks
  let industrialstocks = ['LMT', 'BA' , 'NOC', 'FDX', 'RTN', 'HON', 'AME', 'ITT', 'TPIC', 'PWR']
  let fintech = ['GS', 'SQ', 'JPM', 'BABA', 'MA', 'PYPL' ]
  let enterprisesoftware = ['MDB', 'CRM', 'AAPL', 'ORCL', 'TEAM']
  let consumerstocks = ['TSN', 'SAFM', 'KR', 'COST', 'TGT']
  let semistocks = ['NVDA' ,'MU', 'AMAT', 'LRCX', 'XLNX']
  let bestarray  = []

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

// this.analyzeStocks(industrialstocks[0], industrialstocks[1], industrialstocks[2], industrialstocks[3],industrialstocks[4])
// this.analyzeStocks(fintech[0], fintech[1], fintech[2], fintech[3], fintech[4])
// this.analyzeStocks(enterprisesoftware[0], enterprisesoftware[1], enterprisesoftware[2], enterprisesoftware[3],enterprisesoftware[4])
// this.analyzeStocks(consumerstocks[0], consumerstocks[1], consumerstocks[2], consumerstocks[3], consumerstocks[4])
// this.analyzeStocks(semistocks[0], semistocks[1], semistocks[2], semistocks[3], semistocks[4])

// this.getandPostAllInfo()
// this.getStocks()
// this.saveStocks()
}


// getandPostAllInfo = () => {

//   API.getWatchlist().then(res =>{
//     this.setState({
//         stockarray: bestarray
//     })
//     console.log(res)
//     console.log(this.state)

//     API.insertStock(this.state)
//       .then(res => API.getWatchlist())
//       .catch(err => console.log(err));
//         // console.log(this.state)
//       console.log(this.state)
//     });
// }

analyzeStocks = (a, b, c, d, e) => {

  //first stock- industrials
  API.getQuote(a, b, c, d, e)
  .then(res => {
    console.log(res)
      let array = ''
      let beststock1;
      let bestpick;
   
    // function to rank the best stock
        for (let i=0; i<5; i++) {
          let pe = res[i].data.pegRatio
          // if (res[i].data.pegRatio === undefined) {
          //   let pe = 1
          // }
          if (pe >0) {
               bestpick = Math.min(res[i].data.pegRatio)
               beststock1 = res[i].data.companyName
              }
        }
        array = beststock1
        bestarray.push(array)


    // setState
    this.setState({
          tableData: [{
            market: res[5].data.symbol, 
            pe: res[0].data.peRatio, 
            peg: res[0].data.pegRatio,
            pr: res[0].data.priceToSales, 
            profit: (res[0].data.profitMargin), 
            marketcap: (res[0].data.marketcap/1000000000),
            cr: (res[15].data.balancesheet[0].currentAssets + res[15].data.balancesheet[0].otherCurrentAssets)/res[15].data.balancesheet[0].totalCurrentLiabilities,
            opt: res[10].data,

          }]
        })

    this.setState({
          tableData: [...this.state.tableData, 
          {
            market: res[6].data.symbol, 
            pe: res[1].data.peRatio, 
            peg: res[1].data.pegRatio,
            pr: res[1].data.priceToSales, 
            profit: (res[1].data.profitMargin), 
            marketcap: (res[1].data.marketcap/1000000000),
            cr: (res[16].data.balancesheet[0].currentAssets + res[16].data.balancesheet[0].otherCurrentAssets)/res[16].data.balancesheet[0].totalCurrentLiabilities,
            opt: res[11].data,
    
          }]
        })

    this.setState({
          tableData: [...this.state.tableData, 
          {
            market: res[7].data.symbol, 
            pe: res[2].data.peRatio, 
            peg: res[2].data.pegRatio,
            pr: res[2].data.priceToSales, 
            profit: (res[2].data.profitMargin), 
            marketcap: (res[2].data.marketcap/1000000000),
            cr: (res[17].data.balancesheet[0].currentAssets + res[17].data.balancesheet[0].otherCurrentAssets)/res[17].data.balancesheet[0].totalCurrentLiabilities,
            opt: res[12].data,


          }]
        })

    this.setState({
          tableData: [...this.state.tableData, 
          {
            market: res[8].data.symbol, 
            pe: res[3].data.peRatio, 
            peg: res[3].data.pegRatio,
            pr: res[3].data.priceToSales, 
            profit: (res[3].data.profitMargin), 
            marketcap: (res[3].data.marketcap/1000000000),
            cr: (res[18].data.balancesheet[0].currentAssets + res[18].data.balancesheet[0].otherCurrentAssets)/res[18].data.balancesheet[0].totalCurrentLiabilities,
            opt: res[13].data

          }]
        })

    this.setState({
          tableData: [...this.state.tableData, 
          {
            market: res[9].data.symbol, 
            pe: res[4].data.peRatio, 
            peg: res[4].data.pegRatio,
            pr: res[4].data.priceToSales, 
            profit: (res[4].data.profitMargin), 
            marketcap: (res[4].data.marketcap/1000000000),
            cr: (res[19].data.balancesheet[0].currentAssets + res[19].data.balancesheet[0].otherCurrentAssets)/res[19].data.balancesheet[0].totalCurrentLiabilities,
            opt: res[14].data

          }]
        })

    API.getWatchlist().then(res =>{
    this.setState({
        stockarray: bestarray
    })
    console.log(res)
    console.log(this.state)

    API.insertStock(this.state)
      .then(res => API.getWatchlist())
      .catch(err => console.log(err));
        // console.log(this.state)
      console.log(this.state)
    });

    })
}

      
  render() {

    return (
      <div>

        <DataTable
        title="Technology"
        columns={columns}
        data={ this.state.tableData }
      />


      </div>
    )
  }
};

export default S2 ;

