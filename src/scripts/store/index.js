import {createStore} from 'redux'
import reducer from '../reducer'
import enhancer from '../middlewares'

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store
