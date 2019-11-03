// import React, { Component } from "react";
// import "./sector_1.css";
// import DataTable from 'react-data-table-component';
// import API from "../../utils/API";
// import BTT from "../best_to_trade";


// const columns = [
//   {
//     name: 'Market',
//     selector: 'market',
//     sortable: true,
//   },
//   {
//     name: 'P/E',
//     selector: 'pe',
//     sortable: true,
//     right: true,
//   },
//   {
//     name: 'PEG',
//     selector: 'peg',
//     sortable: true,
//     right: true,
//   },
//   {
//     name: 'Price to Sales(MC/Annual Sales)',
//     selector: 'pr',
//     sortable: true,
//     right: true,
//   },
//   {
//     name: 'Profit in Mil (latest quarter)',
//     selector: 'profit',
//     sortable: true,
//     right: true,
//   },
//   {
//     name: 'MC (in Bil)',
//     selector: 'marketcap',
//     sortable: true,
//     right: true,
//   },
//   {
//     name: 'Current Ratio',
//     selector: 'cr',
//     sortable: true,
//     right: true,
//   },
//   {
//     name: 'Current Price',
//     selector: 'current',
//     sortable: true,
//     right: true,
//   }
// ];

//   //call database for the stocks

//   let bestarray  = []
//   let userarray = []

// //call database for a watchlist of stocks.
 
// class S1 extends Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//       tableData: [],
//       stockarray: []
//   };
//   this.baseState = this.state
// }

// componentDidMount() {
// }

// disableButton = () => {
//   document.getElementById('searchstocks').disabled = true;
//   alert('Go to Home Page for Top Picks')
// }

// analyzeStocks = (a, b, c, d, e) => {

//   //first stock- industrials
//   API.getQuote(a, b, c, d, e)
//   .then(res => {
//     console.log(res)

//     // setState and add data for rendering
//     this.setState({
//           tableData: [{
//             market: res[5].data.symbol, 
//             pe: res[0].data.peRatio, 
//             peg: res[0].data.pegRatio,
//             pr: res[0].data.priceToSales, 
//             profit: (res[0].data.profitMargin), 
//             marketcap: (res[0].data.marketcap/1000000000),
//             cr: (res[10].data.balancesheet[0].currentAssets + res[10].data.balancesheet[0].otherCurrentAssets)/res[10].data.balancesheet[0].totalCurrentLiabilities,
//             current: res[5].data.latestPrice

//           }]
//         })

//     this.setState({
//           tableData: [...this.state.tableData, 
//           {
//             market: res[6].data.symbol, 
//             pe: res[1].data.peRatio, 
//             peg: res[1].data.pegRatio,
//             pr: res[1].data.priceToSales, 
//             profit: (res[1].data.profitMargin), 
//             marketcap: (res[1].data.marketcap/1000000000),
//             cr: (res[11].data.balancesheet[0].currentAssets + res[11].data.balancesheet[0].otherCurrentAssets)/res[11].data.balancesheet[0].totalCurrentLiabilities,
//             current: res[6].data.latestPrice
    
//           }]
//         })

//     this.setState({
//           tableData: [...this.state.tableData, 
//           {
//             market: res[7].data.symbol, 
//             pe: res[2].data.peRatio, 
//             peg: res[2].data.pegRatio,
//             pr: res[2].data.priceToSales, 
//             profit: (res[2].data.profitMargin), 
//             marketcap: (res[2].data.marketcap/1000000000),
//             cr: (res[12].data.balancesheet[0].currentAssets + res[12].data.balancesheet[0].otherCurrentAssets)/res[12].data.balancesheet[0].totalCurrentLiabilities,
//             current: res[7].data.latestPrice

//           }]
//         })

//     this.setState({
//           tableData: [...this.state.tableData, 
//           {
//             market: res[8].data.symbol, 
//             pe: res[3].data.peRatio, 
//             peg: res[3].data.pegRatio,
//             pr: res[3].data.priceToSales, 
//             profit: (res[3].data.profitMargin), 
//             marketcap: (res[3].data.marketcap/1000000000),
//             cr: (res[13].data.balancesheet[0].currentAssets + res[13].data.balancesheet[0].otherCurrentAssets)/res[13].data.balancesheet[0].totalCurrentLiabilities,
//             current: res[8].data.latestPrice


//           }]
//         })

//     this.setState({
//           tableData: [...this.state.tableData, 
//           {
//             market: res[9].data.symbol, 
//             pe: res[4].data.peRatio, 
//             peg: res[4].data.pegRatio,
//             pr: res[4].data.priceToSales, 
//             profit: (res[4].data.profitMargin), 
//             marketcap: (res[4].data.marketcap/1000000000),
//             cr: (res[14].data.balancesheet[0].currentAssets + res[14].data.balancesheet[0].otherCurrentAssets)/res[14].data.balancesheet[0].totalCurrentLiabilities,
//             current: res[9].data.latestPrice

//           }]
//         })

//     // console.log(this.state)

//     //rank to find the best of the five stocks by PEG ratio

//     let rankingarray = []
//     let besttrade = ''
//     let closingpricePeg;


//     for(let i=0; i<5; i++) {
//       let bestrank = rankingarray.push(this.state.tableData[i].peg)
//     }
//       rankingarray.sort()
//       console.log(rankingarray)

//       let filter = rankingarray.filter(function(value) {
//       return value > 0
//     })

//     for(let i=0; i<5; i++) {
//       if(filter[0] === this.state.tableData[i].peg) {
//         besttrade = this.state.tableData[i].market
//         closingpricePeg = this.state.tableData[i].current
//       }
//     }
//     console.log(besttrade)
//     bestarray.push(besttrade)
//     bestarray.push(closingpricePeg)

//   //rank to find the best of the five stocks by Current Ratio - ability to pay liabilities
//     let rankingarrayCR = []
//     let besttradeCR = ''
//     let closingpriceCR;

//     for(let i=0; i<5; i++) {
//       let bestrankCR = rankingarrayCR.push(this.state.tableData[i].cr)
//     }

//       rankingarrayCR.sort(function(a,b){ return b-a })
//       console.log(rankingarrayCR)

//       let filter2 = rankingarrayCR.filter(function(value) {
//       return value > 0
//     })

//     for(let i=0; i<5; i++) {
//       if(filter2[0] === this.state.tableData[i].cr) {
//         besttradeCR = this.state.tableData[i].market
//         closingpriceCR = this.state.tableData[i].current
//       }
//     }
//     console.log(besttradeCR)
//     bestarray.push(besttradeCR)
//     //push closing price into array. use this to log performance
//     bestarray.push(closingpriceCR)

// //add data into Mongo Database. 
// //Allows Home page to grab all the best stocks at that time.
//       API.getWatchlist().then(res =>{
//       this.setState({
//           stockarray: bestarray
//       })
//       // console.log(res)
//       // console.log(this.state)

//       API.insertStock(this.state)
//         .then(res => API.getWatchlist())
//         .catch(err => console.log(err));
//           // console.log(this.state)
//         // console.log(this.state)
//       });
//     })
// }

// handleFormSubmit = event => {
//   event.preventDefault();

//   let search = document.getElementsByClassName('grabthis')
//   //get element by classname returns an array
//   console.log(search)
//   for (let i=0; i<5; i++) {
//     if (search[i].value === '') {
//       alert('enter stocks')
//       userarray = []
//       return
//     } 
//     else {
//     userarray.push(search[i].value) 
//     search[i].value = ''
//     }
//   }

//   console.log(userarray)
//   this.analyzeStocks(
//     userarray[0],
//     userarray[1],
//     userarray[2],
//     userarray[3],
//     userarray[4]
//     )
  
//   this.disableButton()
// }
     
//   render() {

//     return (
//     <div>
//     <form>
//     <input className= 'grabthis' />
//     <input className= 'grabthis' />
//     <input className= 'grabthis' />
//     <input className= 'grabthis' />
//     <input className= 'grabthis' />

//     <button className='grabthis' id="searchstocks" 
//     onClick={this.handleFormSubmit}
//     >Add 5 Stocks from the Same industry
//     </button>

//     </form>

//     <div className = 'stocks'></div>

//         <DataTable
//         title="Five of your Picks"
//         columns={columns}
//         data={ this.state.tableData }
//       />

//     </div>
//     )
//   }
// };

// export default S1 ;

