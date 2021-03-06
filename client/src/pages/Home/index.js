import React, { Component } from 'react';
import BlogList from "../../components/BlogList";
import Filter from "../../components/Filter";
import Jumbotron from "../../components/Jumbotron";
import "./style.css";

class Home extends Component {

    render() {
        return (
            <div>
                <Jumbotron />
                <Filter />
                <br />
                <BlogList />
            </div>
        )
    }
}

export default Home;