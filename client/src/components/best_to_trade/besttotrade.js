import React, { Component } from "react";
import "./besttotrade.css"
import DataTable from 'react-data-table-component';
import S1 from "../sector_1";
import API from "../../utils/API";

const data = [
  { id: 1, 
    market: 'MDB', 
    current: '30', 
    direction: '100', 
    time: '100', 
    iv: '100',
    hv: '100',
    skew: '100',
    rsi: '100',
    ma: '100',
    strategy: '100'
  },
  { id: 2, 
    market: 'render best', 
    current: '30', 
    direction: '100', 
    time: '100', 
    iv: '100',
    hv: '100',
    skew: '100',
    rsi: '100',
    ma: '100',
    strategy: '100'
  },
  { id: 3, 
    market: 'render best', 
    current: '30', 
    direction: '100', 
    time: '100', 
    iv: '100',
    hv: '100',
    skew: '100',
    rsi: '100',
    ma: '100',
    strategy: '100'
  },
  { id: 4, 
    market: 'render best', 
    current: '30', 
    direction: '100', 
    time: '100', 
    iv: '100',
    hv: '100',
    skew: '100',
    rsi: '100',
    ma: '100',
    strategy: '100'
  },
  { id: 5, 
    market: 'render best', 
    current: '30', 
    direction: '100', 
    time: '100', 
    iv: '100',
    hv: '100',
    skew: '100',
    rsi: '100',
    ma: '100',
    strategy: '100'
  },
  { id: 6, 
    market: 'render best', 
    current: '30', 
    direction: '100', 
    time: '100', 
    iv: '100',
    hv: '100',
    skew: '100',
    rsi: '100',
    ma: '100',
    strategy: '100'
  },
  { id: 7, 
    market: 'render best', 
    current: '30', 
    direction: '100', 
    time: '100', 
    iv: '100',
    hv: '100',
    skew: '100',
    rsi: '100',
    ma: '100',
    strategy: '100'
  },
  { id: 8, 
    market: 'render best', 
    current: '30', 
    direction: '100', 
    time: '100', 
    iv: '100',
    hv: '100',
    skew: '100',
    rsi: '100',
    ma: '100',
    strategy: '100'
  },
  { id: 9, 
    market: 'render best', 
    current: '30', 
    direction: '100', 
    time: '100', 
    iv: '100',
    hv: '100',
    skew: '100',
    rsi: '100',
    ma: '100',
    strategy: '100'
  },
  { id: 10, 
    market: 'render best', 
    current: '30', 
    direction: '100', 
    time: '100', 
    iv: '100',
    hv: '100',
    skew: '100',
    rsi: '100',
    ma: '100',
    strategy: '100'
  },
  { id: 11, 
    market: 'render best', 
    current: '30', 
    direction: '100', 
    time: '100', 
    iv: '100',
    hv: '100',
    skew: '100',
    rsi: '100',
    ma: '100',
    strategy: '100'
  }
];

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

  componentDidMount() { 

  API.getQuote()
  .then(res => {
    console.log(res.data)
  })

}

  render() {
    return (
      <DataTable
        title="Best Available"
        columns={columns}
        data={data}
        responsive
        className = 'table1'
      />

    )
  }
};

export default BTT;
