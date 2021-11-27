import React from 'react'

function PlayButton({onClick}) {
    return (
        <div className="newRoundButton">
            <button onClick={onClick}>Another Round</button>
        </div>
    )
}

export default PlayButton
