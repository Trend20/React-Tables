import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
 
const Table = (props) => {
        const { characterData, removeCharacter } = this.props;
        return (
            <table className="table">
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}
 
export default Table;