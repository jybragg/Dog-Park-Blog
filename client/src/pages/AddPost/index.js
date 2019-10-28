import React from 'react';

class AddPost extends React.Component {
    render() {
        return (
           
            <div className="container" id="addPost-container">
                <div class="row">
                    <div class="col-md-5 offset-md-3">
                        <form id="cms">
                            <div class="form-group">
                                <label for="title">Post Title</label>
                                <input type="text" class="form-control" id="title" />
                                <label for="title">image url:</label>
                                <input type="text" class="form-control" id="postImage-url" />
                                <br />
                                <label for="body">Intro:</label>
                                <textarea class="form-control" rows="5" id="post-intro"></textarea>
                                <label for="body">Body:</label>
                                <textarea class="form-control" rows="5" id="post-body"></textarea>
                                <label for="body">Conclusion:</label>
                                <textarea class="form-control" rows="5" id="post-conclusion"></textarea>
                                <br />
                                <button type="submit" class="btn btn-success submit btn-lg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddPost;