import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './addCommentForm.css';

class AddCommentForm extends Component {
  static propTypes = {

  };

  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <form>
        <p className="comment-add-form-label">Add comment</p>
        <section className="comment-add-section">
          <label htmlFor="name" className="comment-add-input-label">Username</label>
          <input id="name" type="text" />
        </section>
        <section>
          <label htmlFor="text" className="comment-add-input-label">Text</label>
          <textarea id="text"></textarea>
        </section>
        <button>Send comment</button>

      </form>
    );
  }

}

export default AddCommentForm;
