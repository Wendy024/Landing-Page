import React from "react";
import "./grid.css"
import AML from "../../components/images/aml.png"
import KYC from "../../components/images/kyc.png"
import Watch from "../../components/images/watchlist.png"

export default function Grid() {
    return (
    <div className="gridContainer">
        <div className="grid">
            <img src={AML} alt=""/>
            <h3>AML Transaction Monitoring</h3>
            <p className="gridP">Identify even complex money laundering and visualize hidden relationships, among transactions. Ensure complete transparency to alleviate regulatory scrutiny.</p>
        </div>
        <div className="grid">
            <img src={KYC} alt="" />
            <h3>KYC/Customer Due Diligence</h3>
            <p className="gridP">Customer risk profiling that dynamically evolves from onboarding through ongoing activity. Proactive triggers for watchlist and significant changes in customer profile.</p>
        </div>
        <div className="grid">
            <img src={Watch} alt="" />
            <h3>Watchlist Screening</h3>
            <p className="gridP">Achieve compliance and prevent reputational damage without constraining resources. Automate customer and payment screening using the latest global watchlists.</p>
        </div>
    </div>
        
    )
}