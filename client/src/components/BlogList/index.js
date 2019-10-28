import React from 'react';

class BlogList extends React.Component {
  render() {
    return (

      <div className="container" id="blogList">
        <div className="card">
          <div className="card-header"><strong>List of blog posts:</strong></div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Blog Post 1</li>
            <li className="list-group-item">Blog Post 2</li>
            <li className="list-group-item">Blog Post 3</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default BlogList;
