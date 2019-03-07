import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import {loadComments} from '../AC'
import Loader from './Loader'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

class CommentList extends Component {
  static propTypes = {
    }

  render() {
    const { article, isOpen, toggleOpen } = this.props

    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick={this.onClickHandler}>{text}</button>
            {this.getBody(
              this.props.comments,
              isOpen,
              article)}
        </div>
    )
  }

  onClickHandler = () => {
    const { article, loadComments, toggleOpen } = this.props

    loadComments(article.id)
    toggleOpen()
  }

  getBody(comments, isOpen, article) {

    if (!isOpen) return null

    if (comments.loading) return <Loader/>
    if (!article.comments.length) return (
        <div>
            <p>No comments yet</p>
            <CommentForm articleId = {article.id} />
        </div>
    )

    const commentSelector = commentSelectorFactory()

    return (
        <div>
            <ul>
                {article.comments.map((id) =>
                  (<li key={id}>
                    <Comment comment = {comments.getIn(['entities', id])}/>
                  </li>))}
            </ul>
            <CommentForm articleId = {article.id} />
        </div>
    )
  }
}

export default connect((state) => {
  return {
    comments: state.comments
  }
}, {loadComments})(toggleOpen(CommentList))
