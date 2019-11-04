import React from 'react';
import "./style.css";


class Post extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="jumbotron justify-content-center img-fluid text-center" id="postJumbo">
                    <h1 id="post-title">{this.props.title}</h1>
                </div>
                <article>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-md-10 mx-auto">
                            <p>{this.props.intro}</p>
                            </div>
                        </div>
                    </div>
                </article>

            </div>

        )
    }
}
export default Post;