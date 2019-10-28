import React, { Component } from 'react';
import BlogList from "../../components/BlogList";
import Filter from "../../components/Filter";
import "./style.css";

class Home extends Component {


    render() {
        return (
            <div>
                <Filter />
                <br />
                <BlogList />
            </div>
        )
    }
}

export default Home;