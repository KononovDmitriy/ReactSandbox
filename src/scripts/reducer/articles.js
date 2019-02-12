import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

export default (articleState = defaultArticles, action) => {
    const {type, payload} = action

    console.log('--------Articles-------')
    console.dir(articleState)
    console.log('-----------------------')

    switch (type) {
        case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)
    }

    return articleState
}
