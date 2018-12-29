import React, {Component} from 'react';
import Comment from './Comment.js';

export default class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isOpen: false
    }
  }

  render() {
    return (
      <div>
        <button onClick = {this.toggleOpen}>
          {(this.state.isOpen) ? 'hide comments' : 'show comments'}
        </button>
        {(this.state.isOpen) ? this.getComments(this.props.comments) : null}
      </div>
    );
  }

  getComments(comments) {
    const commentElement = comments.map(comment =>
      <li key={comment.id}><Comment user={comment.user} text={comment.text}/></li>);

    return <ul>{commentElement}</ul>;
  }

  toggleOpen = (ev) => {
    ev.preventDefault();

    this.setState({
      isOpen: !this.state.isOpen
    });
  }
};
