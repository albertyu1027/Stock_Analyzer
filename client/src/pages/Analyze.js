import React, { Component } from "react";
import API from "../utils/API";
import Tech from "../components/technology";
import RE from "../components/real_estate";

class Analyze extends Component {
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
		<Tech />
		<RE />


		</div>
		

		

	);
	}

}

export default Analyze