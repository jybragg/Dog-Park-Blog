import React from 'react';
import "./style.css";

class Account extends React.Component {
    render() {
        return (


            <section className="jumbotron text-center" id="accountJumbo">
                <div class="container">
                    <br /><b /><br />
                    <h1 class="jumbotron-heading text-black" id="porfolioTitle">Susan's Blog</h1>
                    <p class="lead text-white"></p>

                    <div class="album py-5 bg-light">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <div class="btn-group">
                                                <a className="btn btn-success my-2 my-sm-0 mr-2" id="addPostBtn" href="/addpost">Add a Post</a>
                                                <a className="btn btn-primary my-2 my-sm-0" id="deletePostbtn" href="/delete">Delete a Post</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}
export default Account;