import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import toggleOpen from '../decorators/toggleOpen'
import {loadComments} from '../AC'
import Loader from './Loader'
import {connect} from 'react-redux'

function CommentList({article, isOpen, toggleOpen}) {
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({article, isOpen})}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

function getBody({article: {comments = [], id}, isOpen}) {
    console.log(`Article ID = ${id}`)
    console.dir(comments)
    if (!isOpen) return null
    if (comments.loading) return <Loader/>
    if (!comments.length) return (
        <div>
            <p>No comments yet</p>
            <CommentForm articleId = {id} />
        </div>
    )

    return (
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
            </ul>
            <CommentForm articleId = {id} />
        </div>
    )
}

export default connect(null, {loadComments})(toggleOpen(CommentList))
