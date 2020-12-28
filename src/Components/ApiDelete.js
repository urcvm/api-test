import React, { Component } from 'react'
import axios from 'axios';
export default class ApiDelete extends Component {
    state = {
        id:0,
    }
    handleSubmit = event =>{
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
    }
    handleChange = event => {
        this.setState({
            name: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Person ID:</label>
                    <input type="number" name="id" onChange={this.handleChange}/>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}
