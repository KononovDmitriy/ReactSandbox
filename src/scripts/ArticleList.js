import React from 'react'
import Article from './Article'

export default function ArticleList({articles}) {
    const articleElements = articles.map(article => <li key = {article.id}><Article article = {article}/></li>)

    const ff = <ul>
            {articleElements}
        </ul>

    console.dir(ff);

    return ff
}
