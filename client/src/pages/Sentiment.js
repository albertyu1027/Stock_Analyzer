import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import S1 from "../components/sector_1";

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
		<S1 />

		</div>
		
	);
	}

}

export default Sentiment