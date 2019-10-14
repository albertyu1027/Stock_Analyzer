import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import S2 from "../components/sector_2";

class Sentiment extends Component {
	state = {
		price: 0,
		revenue: 0,
		earnings: 0,
		priceTarget: 0,
		twohunMA: 0,
		fifityMA: 0
	};	


render() {
	return (
		<div>
		<Nav />
		<br />
		<br />
		<br />
		
		<S2 />

		</div>
		
	);
	}

}

export default Sentiment