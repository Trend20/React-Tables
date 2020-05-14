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
    submitForm = () =>{
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)
    }
    render() { 
        const { name, job} = this.state
        return (
            <form>
                <label for="name">Name</label>
                <input 
                type="text"
                className="form-control" 
                placeholder="Enter Name"
                value={name}
                name="name"
                id="name"
                onChange={this.handleChange} />
                <label for="job">Job</label>
                <input
                className="form-control" 
                type="text"
                placeholder="Enter Job"
                value={job}
                name="job"
                id="job"
                onChange={this.handleChange} />
                <br />
                <input type="button" className="btn btn-primary" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}
 
export default Form;