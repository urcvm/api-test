import axios from 'axios';
import React, { Component } from 'react'

export default class ApiPost extends Component {
    state= {
        name : "",
    }
    handleSubmit = event =>{
        event.preventDefault();

        const user ={
            name : this.state.name,
        }

        axios.post("https://jsonplaceholder.typicode.com/users",{ user })
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
                    <label>Person Name</label>
                    <input type="text" name="name" onChange={this.handleChange}/>
                    <button type="submit">Add</button>
                </form>           
            </div>
        )
    }
}
