import React, { Component } from "react";
import "./style.css";


class Filter extends Component {
    render() {
        return (
            <div className="container-fluid filter-container">

                <h2>Filter Articles</h2>
                <div className="row">
                    <div className="col-1 mr-4">
                        <button className="btn btn-outline-success">Dog Parks</button>
                    </div>
                    <div className="col-1 mr-4">
                        <button className="btn btn-outline-success">Doggie DIY</button>
                    </div>
                    <div className="col-1 mr-5">
                        <button className="btn btn-outline-success my-2 my-sm-0">Tips and Tricks</button>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-outline-success my-2 my-sm-0">Treats</button>
                    </div>
                    <div className="col-5 float-right">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search Blog Posts" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>



            </div>
        )
    }
}

export default Filter;