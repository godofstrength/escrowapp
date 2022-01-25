import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to escrowApp</h1>
                <Link to='/register'>Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        )
    }
}

export default Home
