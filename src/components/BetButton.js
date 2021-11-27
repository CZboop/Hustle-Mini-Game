import React from 'react';

function BetButton({amount, onClick }) {
    return (
        <div>
            <button onClick={onClick}>{`Bet £${amount}`}</button>
        </div>
    )
}

export default BetButton;
