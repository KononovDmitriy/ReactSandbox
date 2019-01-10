import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './commentForm.css';

const Restrictions = {
  NAME_MIN_CHAR: 5,
  NAME_MAX_CHAR: 15,
  TEXT_MIN_CHAR: 20,
  TEXT_MAX_CHAR: 50,

}

class CommentForm extends Component {
  static propTypes = {

  };

  state = {
    nameClass: 'comment-form-input',
    textClass: 'comment-form-input'
  }

  render() {
    return (
      <ul>
        <form className="comment-form">
          <h3>Add comment</h3>
          <section className="comment-form-section">
            <label htmlFor="name" className="comment-form-input-label">
              Username
            </label>
            <input
              id="name"
              type="text"
              className={this.state.nameClass}
              onChange={this.onChangeName.bind(this)}
            />
          </section>
          <section className="comment-form-section">
            <label htmlFor="text" className="comment-form-input-label">Text</label>
            <textarea
              id="text"
              className={this.state.textClass}
              onChange={this.onChangeText.bind(this)}
            />
          </section>
          <section className="comment-form-section">
            <input
              type="submit"
              value="Send comment"
              onClick={this.onClickSubmit.bind(this)}
            />
          </section>
        </form>
      </ul>
    );
  }

  onClickSubmit(evt) {
    evt.preventDefault();
  }

  onChangeName(evt) {
    let newClass = this.getInputClass(evt.currentTarget.value.length,
      Restrictions.NAME_MIN_CHAR, Restrictions.NAME_MAX_CHAR);

    if (this.state.nameClass !== newClass) {
      this.setState({
        nameClass: newClass
      });
    }
  }

  onChangeText(evt) {
    let newClass = this.getInputClass(evt.currentTarget.value.length,
      Restrictions.TEXT_MIN_CHAR, Restrictions.TEXT_MAX_CHAR);

    if (this.state.textClass !== newClass) {
      this.setState({
        textClass: newClass
      });
    }
  }

  getInputClass(charCount, minChars, maxChars) {
    return (charCount < minChars || charCount > maxChars) ?
      'comment-form-input comment-form-input-alert' : 'comment-form-input';
  }
}

export default CommentForm;
