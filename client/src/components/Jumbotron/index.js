import React, { Component } from "react";
import "./style.css";


class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron justify-content-center img-fluid">
                <h1 className="display-4"><strong>Dog Park Blog</strong></h1>
                {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            </div>
                )
            }
        }

        export default Jumbotron;