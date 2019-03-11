import {normalizedComments as defaulComments} from '../fixtures'
import {ADD_COMMENT, LOAD_COMMENT, START, SUCCESS} from '../constants'
import {arrToMap, ReducerState} from '../helpers'
import {Record} from 'immutable'

const CommentRecord = Record({
    text: undefined,
    user: '',
    id: undefined
})

const commentsMap = new ReducerState()

export default (commentsState = commentsMap, action) => {
    const {type, payload, response, randomId} = action

    switch (type) {
        case ADD_COMMENT:
            return {...commentsState, [randomId]: payload.comment}

        case LOAD_COMMENT + START:
          console.log('REDUCER LOAD_COMMENT_START')
          return commentsState.set('loading', true)

        case LOAD_COMMENT + SUCCESS:
          console.log('REDUCER LOAD_COMMENT_SUCCESS')
          console.dir(action)
          return commentsState
              .set('entities', arrToMap(response, CommentRecord))
              .set('loading', false)
              .set('loaded', true)
    }

    return commentsState
}
