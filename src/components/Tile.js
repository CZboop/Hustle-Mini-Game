import React from 'react';
import './Tile.css';

function Tile({contents, id, clickFunc}) {
    return (
        <div class="tileClass"  >
                <div class="cardFrontClass" id={id} onClick={clickFunc}>
           <div className="textDiv" id={id}>{contents}</div>
        </div>
        </div>
    )
}

export default Tile;
