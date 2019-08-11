import React from "react";
import "./technology.css"

// import "./technology.css"

const Tech = props =>
<table className="table">
  <thead>
    <tr><h3> Cheat Sheet </h3></tr>
    <tr>
      <th scope="row">Risk Management</th>
      <td>Max Loss per trade: 2%</td>
      <td>Max loss per month: 6%</td>
      <td>No more than 20% in one sector</td>
      <td>Three trades per month</td>
      <td>Trade duration: less than 90 days</td>
    </tr>

    <tr>
      <th scope="col"></th>
      <th scope="col">Conditions</th>
      <th scope="col">Volatility</th>
      <th scope="col">Skew</th>
      <th scope="col">Time</th>
      <th scope="col">Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Vertical Spread (Credit)</th>
      <td>Directional opinion; IV is higher than HV</td>
      <td>Stable or falling</td>
      <td>NA</td>
      <td>30-60 days</td>
      <td>60%-70% of the credit received</td>
    </tr>
    <tr>
      <th scope="row">Iron Condor</th>
      <td>IV is higher than HV</td>
      <td>Any IV level; falling</td>
      <td>Somewhat Steep</td>
      <td>60 days</td>
      <td>50% to 60% of the credit received</td>
    </tr>
    <tr>
      <th scope="row">Iron Butterfly</th>
      <td>IV is higher than HV</td>
      <td>Middle range; falling IV</td>
      <td>Flat</td>
      <td>10-30 days</td>
      <td>Gtfo asap at 5-10% gain</td>
    </tr>
    <tr>
      <th scope="row">Long Calendar</th>
      <td>IV is low; good term structure</td>
      <td>Relatively low; positive vol. structure</td>
      <td>Doesnt matter here</td>
      <td>10-30 days</td>
      <td>Gtfo asap at 5-10% gain</td>
    </tr>
    <tr>
      <th scope="row">Ratio Spread</th>
      <td>Directional opinion; IV is low</td>
      <td>IV is low</td>
      <td>Flat</td>
      <td>30-60 days</td>
      <td>5-10% unless you catch something good</td>
    </tr>
  </tbody>
</table>

export default Tech;
