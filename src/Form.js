import React, { Component } from 'react';
 
class Form extends Component {
    initialState={
        name: '',
        job: '',
    }
    state= this.initialState
    render() { 
        return (
            <div>
                Form
            </div>
        );
    }
}
 
export default Form;