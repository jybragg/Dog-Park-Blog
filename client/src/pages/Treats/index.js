import React, { Component } from 'react';
import BlogList from "../../components/BlogList";
import "./style.css";

class Treats extends Component {

    render() {
        return (
            <div>
                <div className="jumbotron justify-content-center img-fluid" id="treats-jumbo">
                </div>
                <br />
                <BlogList />
            </div>
        )
    }
}

export default Treats;
