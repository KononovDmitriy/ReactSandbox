import {applyMiddleware} from 'redux'

import logger from './logger'
import idGenerator from './idGenerator'

export default applyMiddleware(logger, idGenerator)
