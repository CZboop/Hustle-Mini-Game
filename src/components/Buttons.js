import React from 'react';
import BetButton from './BetButton';

function Buttons() {
    return (
        <div className="betbuttons">
            <BetButton amount='25' onClick={this.onBet}/>
            <BetButton amount='50' onClick={this.onBet}/>
            <BetButton amount='100' onClick={this.onBet}/>
        </div>
    )
}

export default Buttons;
