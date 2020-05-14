import React, { Component } from 'react';
 
class Form extends Component {
    initialState={
        name:'',
        job:''
    }
    state=this.initialState;

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
    }
    render() { 
        const { name, job} = this.state
        return (
            <form>
                <label for="name">Name</label>
                <input 
                type="text"
                placeholder="Enter Name"
                value={name}
                name="name"
                id="name"
                onChange={this.handleChange} />
                <label for="job">Job</label>
                <input 
                type="text"
                placeholder="Enter Job"
                value={job}
                name="job"
                id="lob"
                onChange={this.handleChange} />
            </form>
        );
    }
}
 
export default Form;