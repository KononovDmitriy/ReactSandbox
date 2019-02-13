import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import articlesList from './articlesList'
import comments from './comments'
import filters from './filters'
import openArticleId from './openArticleId.js'

export default combineReducers({
    count: counterReducer, openArticleId,
    articles, articlesList, comments, filters
})
