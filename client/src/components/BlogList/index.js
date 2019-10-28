import React from 'react';

class BlogList extends React.Component {
  render() {
    return (

      <div className="container mb-5" id="blogList">

        <div className="card">
          <div className="card-header"><strong>List of blog posts:</strong></div>
        </div>
        <br />
        <div className="card">
          <img src={"../../images/pug.jpg"} className="card-img-left" alt="post pic" />
        </div>
        <div className="card">
          <div class="card-body">
            <p class="card-text">Post Summary</p>
          </div>
        </div>  

      </div>
    )
  }
}

export default BlogList;
