import React from 'react';

class Account extends React.Component {
    render() {
        return (
           
            <div className="container justify-content-center" id="addPost-container">
                 <a className="btn btn-success my-2 my-sm-0 mr-2" id = "addPostBtn" href="/addpost">Add a Post</a>
                 <a className="btn btn-success my-2 my-sm-0" id= "deletePostbtn" href="/delete">Delete a Post</a>
                </div>
        )
    }
}
export default Account;