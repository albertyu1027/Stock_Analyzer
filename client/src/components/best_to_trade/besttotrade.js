import React, { Component } from "react";
import "./besttotrade.css"
import DataTable from 'react-data-table-component';
import API from "../../utils/API";
import S1 from "../sector_1";


const columns = [
  {
    name: 'Best PEG (growth)',
    selector: 'market',
    sortable: true,
  },
  {
    name: 'Current Price',
    selector: 'currentprice',
    sortable: true,
  },
  {
    name: 'Price during Search',
    selector: 'searchprice',
    sortable: true,
  },
  {
    name: 'Delta Since Search',
    selector: 'delta',
    sortable: true,
  },
  {
    name: 'Best Current Ratio',
    selector: 'market2',
    sortable: true,
  },
  {
    name: 'Current Price',
    selector: 'currentprice2',
    sortable: true,
  },
  {
    name: 'Price during Search',
    selector: 'searchpriceCR',
    sortable: true,
  },
  {
    name: 'Delta Since Search',
    selector: 'delta2',
    sortable: true,
  },
  {
    name: 'Date',
    selector: 'date',
    sortable: true,
    right: true,
  },

  // {
  //   name: 'Direction (Opinion or use PT)',
  //   selector: 'direction',
  //   sortable: true,
  //   right: true,
  // },
  // {
  //   name: 'Duration',
  //   selector: 'time',
  //   sortable: true,
  //   right: true,
  // },
  // {
  //   name: 'IV',
  //   selector: 'iv',
  //   sortable: true,
  //   right: true,
  // },
  // {
  //   name: 'HV',
  //   selector: 'hv',
  //   sortable: true,
  //   right: true,
  // },
  // {
  //   name: 'Skew',
  //   selector: 'skew',
  //   sortable: true,
  //   right: true,
  // },
  // {
  //   name: 'RSI',
  //   selector: 'rsi',
  //   sortable: true,
  //   right: true,
  // },
  // {
  //   name: '200 MA',
  //   selector: 'ma',
  //   sortable: true,
  //   right: true,
  // },
  // {
  //   name: 'Strategy',
  //   selector: 'strategy',
  //   sortable: true,
  //   right: true,
  // }
];

 
class BTT extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }


  componentDidMount() { 
    this.showMeTheBest();
  }

  showMeTheBest = () => 
  API.getWatchlist().then(res =>{
    // console.log(res)
    let beststock1 = res.data[0].stockarray[0]
    let beststock2 = res.data[0].stockarray[2]
    let beststock3 = res.data[1].stockarray[0]
    let beststock4 = res.data[1].stockarray[2]
    let beststock5 = res.data[2].stockarray[0]
    let beststock6 = res.data[2].stockarray[2]
    let beststock7 = res.data[3].stockarray[0]
    let beststock8 = res.data[3].stockarray[2]
    let beststock9 = res.data[4].stockarray[0]
    let beststock10 = res.data[4].stockarray[2]

    API.getOneQuote(beststock1, beststock2
      , 
      beststock3, beststock4, beststock5, 
      beststock6, beststock7, beststock8, beststock9, beststock10
      )
    .then(res2 => {
      // console.log(res2)

    if (res.data[0] === undefined) {
      alert('Nothing to show')
      return
    } 
    else {

    this.setState({
      tableData: 
        [{
            market: res.data[0].stockarray[0],
            currentprice: res2[0].data.latestPrice,
            searchprice: res.data[0].stockarray[1],
            delta: ((res2[0].data.latestPrice-res.data[0].stockarray[1])/res2[0].data.latestPrice).toFixed(2),
            market2: res.data[0].stockarray[2],
            currentprice2: res2[1].data.latestPrice,
            searchpriceCR: res.data[0].stockarray[3],
            delta2: ((res2[1].data.latestPrice-res.data[0].stockarray[3])/res2[1].data.latestPrice).toFixed(2),
            date: res.data[0].date
        }]
    })

    } 

    if (res.data[1] === undefined) {
      alert('Add more stocks')
      return
    } 
    else {

    this.setState({
          tableData: [...this.state.tableData, 
          {
            market: res.data[1].stockarray[0],
            currentprice: res2[2].data.latestPrice,
            searchprice: res.data[1].stockarray[1],
            delta: ((res2[2].data.latestPrice-res.data[1].stockarray[1])/res2[2].data.latestPrice).toFixed(2),
            market2: res.data[1].stockarray[2],
            currentprice2: res2[3].data.latestPrice,
            searchpriceCR: res.data[1].stockarray[3],
            delta2: ((res2[3].data.latestPrice-res.data[1].stockarray[3])/res2[3].data.latestPrice).toFixed(2),
            date: res.data[1].date
          }]
    })

    }

    if (res.data[2] === undefined) {
      alert('Add more stocks')
      return
    } 
    else {

    this.setState({
          tableData: [...this.state.tableData, 
          {
            market: res.data[2].stockarray[0],
            currentprice: res2[4].data.latestPrice,
            searchprice: res.data[2].stockarray[1],
            delta: ((res2[4].data.latestPrice-res.data[2].stockarray[1])/res2[4].data.latestPrice).toFixed(2),
            market2: res.data[2].stockarray[2],
            currentprice2: res2[5].data.latestPrice,
            searchpriceCR: res.data[2].stockarray[3],
            delta2: ((res2[5].data.latestPrice-res.data[2].stockarray[3])/res2[5].data.latestPrice).toFixed(2),
            date: res.data[2].date
          }]
    })

    }

    if (res.data[3] === undefined) {
      alert('Add more stocks')
      return
    } 
    else {

    this.setState({
          tableData: [...this.state.tableData, 
          {
            market: res.data[3].stockarray[0],
            currentprice: res2[6].data.latestPrice,
            searchprice: res.data[3].stockarray[1],
            delta: ((res2[6].data.latestPrice-res.data[3].stockarray[1])/res2[6].data.latestPrice).toFixed(2),
            market2: res.data[3].stockarray[2],
            currentprice2: res2[7].data.latestPrice,
            searchpriceCR: res.data[3].stockarray[3],
            delta2: ((res2[7].data.latestPrice-res.data[3].stockarray[3])/res2[7].data.latestPrice).toFixed(2),
            date: res.data[3].date
          }]
    })

    }

    if (res.data[4] === undefined) {
      alert('Add more stocks')
      return
    } 
    else {

    this.setState({
          tableData: [...this.state.tableData, 
          {
            market: res.data[4].stockarray[0],
            currentprice: res2[8].data.latestPrice,
            searchprice: res.data[4].stockarray[1],
            delta: ((res2[8].data.latestPrice-res.data[4].stockarray[1])/res2[8].data.latestPrice).toFixed(2),
            market2: res.data[4].stockarray[2],
            currentprice2: res2[9].data.latestPrice,
            searchpriceCR: res.data[4].stockarray[3],
            delta2: ((res2[9].data.latestPrice-res.data[4].stockarray[3])/res2[9].data.latestPrice).toFixed(2),
            date: res.data[4].date
          }]
      })
    }
  })  
 
  })

  render() {
    // console.log(this.props);
    return (
      <DataTable
        title="Top 5 Trades. Enter stocks once a month"
        columns={columns}
        data={ this.state.tableData }
        responsive
        className = 'table1'
      />
    )
  }
};

export default BTT;
