import React from 'react';
import "./style.css";

class BlogList extends React.Component {
  render() {
    return (

      <div className="container mb-5" id="blogList">
        <div className="row">
          <h2>Recent Posts: </h2>
        </div>
        <br />

        <div class="card flex-row flex-wrap">
          <div class="card-header border-0">
            <img id="listImg" src={require("../../images/pug.jpg")} alt="post pic" />
          </div>
          <div className="card-block px-2">
            <h4 className="card-title">Post Title</h4>
            <p className="card-text">Post Description</p>
            <a href="#" class="btn btn-primary">View Post</a>
          </div>
          <div className="w-100"></div>
          <div className="card-footer w-100 text-muted">
            FOOTER
        </div>
        </div>
        <br />
        <div className="card flex-row flex-wrap">
          <div className="card-header border-0">
            <img id="listImg" src={require("../../images/dog1.jpg")} alt="post pic" />
          </div>
          <div className="card-block px-2">
            <h4 className="card-title">Post Title</h4>
            <p className="card-text">Post Description</p>
            <a href="#" class="btn btn-primary">View Post</a>
          </div>
          <div className="w-100"></div>
          <div className="card-footer w-100 text-muted">
            FOOTER
        </div>
        </div>
        <br />
        <div className="card flex-row flex-wrap">
          <div className="card-header border-0">
            <img id="listImg" src={require("../../images/falldog.jpg")} alt="post pic" />
          </div>
          <div class="card-block px-2">
            <h4 class="card-title">Post Title</h4>
            <p class="card-text">Post Description</p>
            <a href="#" class="btn btn-primary">View Post</a>
          </div>
          <div class="w-100"></div>
          <div class="card-footer w-100 text-muted">
            FOOTER
        </div>
        </div>
        <br />

        {/* <div className="card">
          <div className="card-header"><strong>List of blog posts:</strong></div>
        </div>
        <br />
        <div className="card">
          <img src={require("../../images/pug.jpg")} className="card-img-left" alt="post pic" />
        </div>
        <div className="card">
          <div class="card-body">
            <p class="card-text">Post Summary</p>
          </div>
        </div>   */}

      </div>
    )
  }
}

export default BlogList;
