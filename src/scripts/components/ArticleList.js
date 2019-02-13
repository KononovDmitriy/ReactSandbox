import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from '../selectors'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articlesList: PropTypes.array.isRequired,
        articles: PropTypes.object.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        console.log('---', 'update article list')

        const { articlesList, articles, openItemId, toggleOpenItem } = this.props
        const articleElements = articlesList.map(articleId => <li key={articles[articleId].id}>
            <Article
                article = {articles[articleId]}
                isOpen = {articles[articleId].id === openItemId}
                toggleOpen = {toggleOpenItem(articles[articleId].id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect((state) => {
    return {
        articlesList: filtratedArticlesSelector(state),
        articles: state.articles
    }
})(accordion(ArticleList))
