// import React from 'react';
// import axios from 'axios';
// import Post from "../Post";

// class AddPost extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             title: '',
//             intro: '',
//             body: '',
//             conclusion: ''
//         }
//         this.handleChangeField = this.handleChangeField.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(e) {
//         const { title, intro, body, conclusion } = this.state;
//         e.preventDefault();
//         console.log(this.state)
//         // const response = axios.post('http://http://localhost:3000/addpost', { posted_data: 'example' });
//         //     console.log('👉 Returned data');
//         // } catch(e) {
//         //     console.log(`😱 Axios request failed: ${e}`);
//         // return axios.post('http://localhost:3000/api/articles', {
//         //     title,
//         //     intro,
//         //     body,
//         //     conclusion,
//         // });
//     }

//     //clear form afterwards

//     handleChangeField(key, event) {
//         this.setState({
//             [key]: event.target.value,
//         });
//     }

//     render() {
//         const { title, intro, body, conclusion } = this.state;
//         return (

//             <div className="container mt-3" id="addPost-container">
//                 <div className="row">
//                     <div className="col-md-5 offset-md-3">
//                         <form id="cms">
//                             <div className="form-group">
//                                 <label for="title">Post Title</label>
//                                 <input
//                                     onChange={(ev) => this.handleChangeField('title', ev)}
//                                     value={title}
//                                     className="form-control my-3"
//                                     placeholder="Article Title" />
//                                 {/* <label for="title">image url:</label>
//                                 <input type="text" class="form-control" id="postImage-url" /> */}
//                                 <br />
//                                 <label for="intro">Intro:</label>
//                                 <textarea
//                                     onChange={(ev) => this.handleChangeField('intro', ev)}
//                                     className="form-control my-3"
//                                     placeholder="Article Intro"
//                                     value={intro}></textarea>

//                                 <label for="body">Body:</label>
//                                 <textarea
//                                     onChange={(ev) => this.handleChangeField('body', ev)}
//                                     className="form-control my-3"
//                                     placeholder="Article Body"
//                                     value={body}></textarea>

//                                 <label for="conclusion">Conclusion:</label>
//                                 <textarea onChange={(ev) => this.handleChangeField('conclusion', ev)}
//                                     className="form-control my-3"
//                                     placeholder="Article Conclusion"
//                                     value={conclusion}></textarea>

//                                 <br />
//                                 <button onClick={this.handleSubmit} type="submit" className="btn btn-success submit btn-lg">Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//                 <div className="row">
                   
//                         <div className="container blog-container" id="test-post">
//                             <Post 
//                             title={this.state.title}
//                             intro={this.state.intro}
//                             />
//                         </div>
                   
//                 </div>

//             </div>
//         )
//     }
// }
// export default AddPost;

//=======================================================//

import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      author: '',
    }

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.articleToEdit) {
      this.setState({
        title: nextProps.articleToEdit.title,
        body: nextProps.articleToEdit.body,
        author: nextProps.articleToEdit.author,
      });
    }
  }

  handleSubmit(){
    const { onSubmit, articleToEdit, onEdit } = this.props;
    const { title, body, author } = this.state;

    if(!articleToEdit) {
      return axios.post('http://localhost:8000/api/articles', {
        title,
        body,
        author,
      })
        .then((res) => onSubmit(res.data))
        .then(() => this.setState({ title: '', body: '', author: '' }));
    } else {
      return axios.patch(`http://localhost:8000/api/articles/${articleToEdit._id}`, {
        title,
        body,
        author,
      })
        .then((res) => onEdit(res.data))
        .then(() => this.setState({ title: '', body: '', author: '' }));
    }
  }

  handleChangeField(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  render() {
    const { articleToEdit } = this.props;
    const { title, body, author } = this.state;

    return (
      <div className="col-12 col-lg-6 offset-lg-3">
        <input
          onChange={(ev) => this.handleChangeField('title', ev)}
          value={title}
          className="form-control my-3"
          placeholder="Article Title"
        />
        <textarea
          onChange={(ev) => this.handleChangeField('body', ev)}
          className="form-control my-3"
          placeholder="Article Body"
          value={body}>
        </textarea>
        <input
          onChange={(ev) => this.handleChangeField('author', ev)}
          value={author}
          className="form-control my-3"
          placeholder="Article Author"
        />
        <button onClick={this.handleSubmit} className="btn btn-primary float-right">{articleToEdit ? 'Update' : 'Submit'}</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch({ type: 'SUBMIT_ARTICLE', data }),
  onEdit: data => dispatch({ type: 'EDIT_ARTICLE', data }),
});

const mapStateToProps = state => ({
  articleToEdit: state.home.articleToEdit,
});

export default Form;

// connect(mapStateToProps, mapDispatchToProps)