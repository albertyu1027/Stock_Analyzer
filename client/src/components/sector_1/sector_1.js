import React, { Component } from "react";
import "./sector_1.css";
import DataTable from 'react-data-table-component';
import API from "../../utils/API";

const apidata = [{
  stock: "RTN",
  pe: 10,
  pr: 100,
  profit: 50,
  pt: 400
}]

// loaddata = () => {
//   API.getQuote()
//     .then(res =>)
// }

const dataset = [
  { id: 1, 
    market: apidata[0].stock, 
    pe: apidata[0].pe, 
    pr: apidata[0].pr, 
    profit: apidata[0].profit, 
    marketcap: '100',
    pt: apidata[0].pt,
    rg1: '100',
    rg2: '100',
    rg3: '100',
    dcfpt: '100',
    prpt: '100',
    pept: '100'
  },
  { id: 2, 
    market: 'API', 
    pe: '40', 
    pr: '100', 
    profit: '100', 
    marketcap: '100',
    pt: '100',
    rg1: '100',
    rg2: '100',
    rg3: '100',
    dcfpt: '100',
    prpt: '100',
    pept: '100'
  },
  { id: 3, 
    market: 'API', 
    pe: '50', 
    pr: '100', 
    profit: '100', 
    marketcap: '100',
    pt: '100',
    rg1: '100',
    rg2: '100',
    rg3: '100',
    dcfpt: '100',
    prpt: '100',
    pept: '100'
  },
  { id: 4, 
    market: 'API', 
    pe: '60', 
    pr: '100', 
    profit: '100', 
    marketcap: '100',
    pt: '100',
    rg1: '100',
    rg2: '100',
    rg3: '100',
    dcfpt: '100',
    prpt: '100',
    pept: '100'
  },
  { id: 5, 
    market: 'API', 
    pe: '70', 
    pr: '100', 
    profit: '100', 
    marketcap: '100',
    pt: '100',
    rg1: '100',
    rg2: '100',
    rg3: '100',
    dcfpt: '100',
    prpt: '100',
    pept: '100'
  }
];

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
    name: 'Profit',
    selector: 'profit',
    sortable: true,
    right: true,
  },
  {
    name: 'MC',
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
 
class S1 extends Component {
    constructor(props) {
    super(props);
    this.state = {
    market: 'baba', 
    pe: '', 
    pr: '', 
    profit: '', 
    marketcap: '',
    pt: '', 
    rg1: '',
    rg2: '',
    rg3: '',
    dcfpt: '',
    prpt: '',
    pept: ''
  };
}

  render() {
    return (
      <DataTable
        title="Industrials"
        columns={columns}
        data={dataset}
      />
    )
  }
};

export default S1;
