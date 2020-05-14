import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
 
const Table = (props) =>{
        const { characterData, removeCharacter } = props
        return (
            <table className="table">
                <TableHead />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}
 
export default Table;