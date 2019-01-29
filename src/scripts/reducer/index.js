import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import articleFilters from './filters'

export default combineReducers({
    count: counterReducer,
    articles,
    articleFilters
})
