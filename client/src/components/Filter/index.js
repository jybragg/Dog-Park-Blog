import React, { Component } from "react";
import "./style.css";


class Filter extends Component {
    render() {
        return (
            <div className="container-fluid filter-container justify-content-center">
                <div className="row">

                    <div className="col">
                        <div className="card allCards">
                            <div className="img-container">
                                <img className="img-fluid" alt="friend" src={require("../../images/treats.jpg")} />
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card allCards">
                            <div className="img-container">
                                <img className="img-fluid" alt="friend" src={require("../../images/diy.jpg")} />
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card allCards">
                            <div className="img-container">
                                <img className="img-fluid" alt="friend" src={require("../../images/walking.jpg")} />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card allCards">
                            <div className="img-container">
                                <img className="img-fluid" alt="friend" src={require("../../images/parks.jpg")} />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card allCards">
                            <div className="img-container">
                                <img className="img-fluid" alt="friend" src={require("../../images/luna.jpg")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;