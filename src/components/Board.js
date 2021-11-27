import React from 'react';
import './Board.css';
import Tile from './Tile';

function Board({contents, clickFunc}) {
    const cardArray = [];
    let i;
    for (i=0; i<2; i++){
        cardArray.push(
            <Tile value={String.fromCodePoint(0x1F921)} clickFunc={clickFunc} id={i} contents={contents[i]}/>
        )}
        cardArray.push(
            <Tile value={String.fromCodePoint(0x1F478)} clickFunc={clickFunc} id={2} contents={contents[2]}/>)

    return (
        <div class='boardClass'>
            {cardArray}
        </div>
    )
}

export default Board;
