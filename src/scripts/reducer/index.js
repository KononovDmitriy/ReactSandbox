import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import articlesList from './articlesList'
import comments from './comments'
import filters from './filters'

export default combineReducers({
    count: counterReducer,
    articles, articlesList, comments, filters
})
