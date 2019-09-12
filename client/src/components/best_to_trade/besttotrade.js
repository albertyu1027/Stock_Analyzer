import React, { Component } from "react";
import "./besttotrade.css"
import DataTable from 'react-data-table-component';
import API from "../../utils/API";





const columns = [
  {
    name: 'Market',
    selector: 'market',
    sortable: true,
  },
  {
    name: 'Current Price',
    selector: 'current',
    sortable: true,
    right: true,
  },
  {
    name: 'Direction (Opinion or use PT)',
    selector: 'direction',
    sortable: true,
    right: true,
  },
  {
    name: 'Duration',
    selector: 'time',
    sortable: true,
    right: true,
  },
  {
    name: 'IV',
    selector: 'iv',
    sortable: true,
    right: true,
  },
  {
    name: 'HV',
    selector: 'hv',
    sortable: true,
    right: true,
  },
  {
    name: 'Skew',
    selector: 'skew',
    sortable: true,
    right: true,
  },
  {
    name: 'RSI',
    selector: 'rsi',
    sortable: true,
    right: true,
  },
  {
    name: '200 MA',
    selector: 'ma',
    sortable: true,
    right: true,
  },
  {
    name: 'Strategy',
    selector: 'strategy',
    sortable: true,
    right: true,
  }
];

 
class BTT extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }


  componentDidMount() { 

  API.getWatchlist().then(res =>{
    console.log(res)
    
  })

    // <S1 />

    this.setState({
      tableData: 
        [{
            market: this.props.stockTWO,
            current_price: 1222,
            direction: '100', 
            time: '100', 
            iv: '100',
            hv: '100',
            skew: '100',
            rsi: '100',
            ma: '100',
            strategy: '100'
        }]
    })
  //   const search = 'aapl'
  // API.getQuote(search)
  // .then(res => {
  //   // console.log(res.data)
  //     this.setState({
  //       tableData: 
  //       [{
  //           market: search,
  //           current_price: res.data.delayedPrice,
  //           direction: '100', 
  //           time: '100', 
  //           iv: '100',
  //           hv: '100',
  //           skew: '100',
  //           rsi: '100',
  //           ma: '100',
  //           strategy: '100'
  //       }, 
  //       {
  //           market: res.data.symbol,
  //           current_price: res.data.delayedPrice,
  //           direction: '100', 
  //           time: '100', 
  //           iv: '100',
  //           hv: '100',
  //           skew: '100',
  //           rsi: '100',
  //           ma: '100',
  //           strategy: '100'
  //       }
  //       ]
  //   })
  //     console.log(this.state)
  // })

}

  render() {

    // console.log(this.props);


    return (
      <DataTable
        title="Best Available"
        columns={columns}
        data={ this.state.tableData }
        responsive
        className = 'table1'
      />
 


    )
  }
};

export default BTT;
