import React, { Component } from 'react';
 
class Table extends Component {
    render() { 
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Naomi</td>
                        <td>Doctor</td>
                    </tr>
                    <tr>
                        <td>Erick</td>
                        <td>Engineer</td>
                    </tr>
                    <tr>
                        <td>Vera</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td>Steve</td>
                        <td>Coder</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
 
export default Table;