import React from 'react';
import './CurrentBet.css';

function CurrentBet(props) {
    return (
        <div className="currentBetDiv">
            <h2>{`Current bet: £${props.currentBet}`}</h2>
        </div>
    )
}

export default CurrentBet;
