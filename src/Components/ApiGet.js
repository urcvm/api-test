import axios from 'axios'
import React, { Component } from 'react'

export default class ApiGet extends Component {
    state = {
        person : [],
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            res=> {
                console.log(res.data);
                this.setState({person : res.data})
            }
        )
    }
    render() {
        return (
            <div>
                <ul>{this.state.person.map(person=>
                    <li key={person.id}>{person.name}</li>)}</ul>
                
            </div>
        )
    }
}
