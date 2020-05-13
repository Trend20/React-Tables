import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
 
class Table extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() { 
        return (
            <table className="table">
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}
 
export default Table;