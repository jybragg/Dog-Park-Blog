import React, { Component } from "react";
import "./style.css";


class Header extends Component {
    render() {
        return (
            // <!-- Page Header -->
            <header className="masthead img-flex">
               
                    <div className="site-heading">
                      <h1>Clean Blog</h1>
                      <span className="subheading">A Blog Theme by Start Bootstrap</span>
                    </div>
              
            </header>
        )
    }
};

export default Header;
