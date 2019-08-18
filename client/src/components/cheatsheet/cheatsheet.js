import React from "react";
import "./cheatsheet.css"

const Cheat = props =>
<table className="table">
  <thead>
    <tr><h3> Cheat Sheet </h3></tr>
    <tr>
      <th scope="row">Greeks</th>
      <td>Delta- percent chance (or probability) that an option will expire in the money. 
      <p>The Delta of out-of-the-money put options will get closer to zero as expiration approaches</p>
      <p>The Delta of in-the-money put options will get closer to -1.00 as expiration approaches.</p>
      <p>At-the-money options usually have a Delta near -.50.</p>
      </td>
      <td>Gamma- rate of change of Delta. You can think of Delta as speed and Gamma as acceleration. 
      <p>This change in Delta from 0.40 to 0.55 is 0.15—this is the option's Gamma.</p>
      <p>Because Delta can't exceed 1.00, Gamma decreases as an option gets further in the money and Delta approaches 1.00.</p>
      <p>Delta is only accurate at a certain price and time. </p>
      </td>
      <td>Theta- time decay- tells you how much the price of an option should decrease as the option nears expiration.
      <p>Since options lose value as expiration approaches, Theta estimates how much value the option will lose, each day, if all other factors remain the same.</p>
      <p></p>
      <p></p>
      </td>
      <td>Vega- option price sensitivity to implied volatility and tells you how much an option's price should move when the volatility of the underlying security or index increases or decreases
      <p>Vega measures the rate of change in an option's price per 1% change in the  implied volatility of the underlying stock. </p>
      <p><b>All other factors being equal, when determining strategy, consider buying options when Vega is below "normal" levels and selling options when Vega is above "normal" levels. One way to determine this is to compare the historical volatility to the implied volatility.</b> </p>
      <p>A drop in Vega will typically cause both calls and puts to lose value</p>
      <p>A drop in Vega will typically cause both calls and puts to lose value</p>
      </td>
      <td>Rho- sensitivity to 1% change in interest rates. It tells you how much the price of an option should rise or fall if the “risk-free” (U.S. Treasury-bill) interest rate increases or decreases.
      <p>As interest rates increase, the value of call options will generally increase</p>
      <p>As interest rates increase, the value of put options will usually decrease.</p>
      <p>For these reasons, call options have positive Rho and put options have negative Rho.</p>
      <p>Long-Term Equity AnticiPation Securities® (LEAPS®) options are far more sensitive to changes in interest rates than are shorter-term options. </p>
      <p>As interest rates increase, this difference between puts and calls whose strikes are equidistant from the underlying stock will get wider.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Implied Volatility</th>
      <td>Higher-than-normal implied volatilities are usually more favorable for options sellers, while lower-than-normal implied volatilities are more favorable for option buyers because volatility often reverts back to its mean over time.</td>
      <td>To an options trader, solving for implied volatility is generally more useful than calculating the theoretical price, since it's difficult for most traders to estimate future volatility.</td>    
      <td>By comparing the underlying stock’s implied volatility to the historical volatility, you can sometimes get a good sense of whether an option is priced higher or lower than normal.</td>
    </tr>
    <tr>
      <th scope="row">Risk Management</th>
      <td>Max Loss per trade: 2%</td>
      <td>Max loss per month: 6%</td>
      <td>No more than 20% in one sector</td>
      <td>Three trades per month (P/E Ratio)</td>
      <td>Trade duration: less than 90 days</td>
    </tr>
    <tr>
      <th scope="row">Metals for futures</th>
      <td>Copper</td>
      <td>Gold</td>
      <td>Silver</td>
    </tr>
    <tr>
      <th scope="col"></th>
      <th scope="col">Setup</th>
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
      <td>Sell a put/Buy a put; sell a call/buy a call</td>
      <td>Directional opinion; IV is higher than HV</td>
      <td>Stable or falling</td>
      <td>NA</td>
      <td>30-60 days</td>
      <td>60%-70% of the credit received</td>
    </tr>
    <tr>
      <th scope="row">Iron Condor</th>
      <td>Two vertical spreads</td>
      <td>IV is higher than HV</td>
      <td>Any IV level; falling</td>
      <td>Somewhat Steep</td>
      <td>60 days</td>
      <td>50% to 60% of the credit received</td>
    </tr>
    <tr>
      <th scope="row">Iron Butterfly</th>
      <td>Directional opinion; IV is higher than HV</td>
      <td>IV is higher than HV</td>
      <td>Middle range; falling IV</td>
      <td>Flat</td>
      <td>10-30 days</td>
      <td>Gtfo asap at 5-10% gain</td>
    </tr>
    <tr>
      <th scope="row">Long Calendar</th>
      <td>Directional opinion; IV is higher than HV</td>
      <td>IV is low; good term structure</td>
      <td>Relatively low; positive vol. structure</td>
      <td>Doesnt matter here</td>
      <td>10-30 days</td>
      <td>Gtfo asap at 5-10% gain</td>
    </tr>
    <tr>
      <th scope="row">Ratio Spread</th>
      <td>Sell 2 puts/buy 1 call</td>
      <td>Directional opinion; IV is low</td>
      <td>IV is low</td>
      <td>Flat</td>
      <td>30-60 days</td>
      <td>5-10% unless you catch something good</td>
    </tr>
  </tbody>
</table>

export default Cheat;
