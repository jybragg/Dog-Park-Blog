import React, { Component } from 'react';
import BlogList from "../../components/BlogList"

class Home extends Component {

    render() {
    return (
        <div>
            <h1>You are on the Home page</h1>
            <BlogList />
        </div>
    )
    }
}

export default Home;