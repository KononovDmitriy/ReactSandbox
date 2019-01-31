import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        filters: PropTypes.object.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }
    render() {
        const { articles, filters, openItemId, toggleOpenItem } = this.props

        const filteredArticles = this.filterArticles(articles, filters)

        // console.dir(filteredArticles)

        const articleElements = filteredArticles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    filterArticles(articles, filters) {
      const { selected, dateState} = filters

        return this.filterDate(this.filterSelected(articles, selected), dateState)
    }

    filterSelected(articles, filter) {
      return (filter.length === 0) ? articles :
        articles.filter((el) => filter.find((fel) => fel.value === el.id))
    }

    filterDate(articles, filter) {

      const { from, to } = filter

      if (!from)
        return articles

      const dateFrom = this.getUtcTime(from)
      const dateTo = (!to) ? dateFrom : this.getUtcTime(to)

      return articles.filter((article) => {
        const artDate = this.getUtcTime(article.date)

        return (artDate < dateFrom || artDate > dateTo) ? false : true
      })
    }

    getUtcTime(date) {
      if (!(date instanceof Date))
        date = new Date(date)

      date.setUTCHours(0)
      date.setUTCMinutes(0)
      return date.setUTCSeconds(0)
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.articleFilters
}))(accordion(ArticleList))
