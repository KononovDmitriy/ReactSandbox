import React, {Component} from 'react'
import Article from './Article'
import accordeonOpen from '../decorators/accordeonOpen.js'

function ArticleList(props) {
    console.dir(props);
    console.dir(props.openArticleId);

    const articleElements = props.articles.map(article =>
      <li key={article.id}>
        <Article
            article = {article}
            isOpen = {article.id === props.openArticleId}
            toggleOpen = {ev => {
                ev.preventDefault();
                props.toggleOpen(article.id)
              }
            }
        />
      </li>);

  return (<ul>{articleElements}</ul>);
}

export default accordeonOpen(ArticleList);
