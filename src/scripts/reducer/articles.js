import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

export default (articles = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE: return articles.filter(article => article.id !== payload.id)
        case ADD_COMMENT:
          const newState = {...articles}
          newState[payload.articleId].comments.push(payload.commentId)
          return newState
    }

    return articles
}
