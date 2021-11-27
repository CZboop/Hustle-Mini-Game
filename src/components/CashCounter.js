import React from 'react';

function CashCounter(props) {
    return (
        <div>
            <h2>{`Money left: £${props.cash}`}</h2>
        </div>
    )
}

export default CashCounter;
