import {normalizedComments as defaulComments} from '../fixtures'
import { ADD_COMMENT } from '../constants'

export default (commentsState = defaulComments, action) => {
    const {type, payload} = action

    switch (type) {
      case ADD_COMMENT:
        return {
          ...commentsState,
          [payload.commentId]: {
            id: payload.commentId,
            text: payload.text,
            user: payload.user,
          }
        }
    }

    return commentsState
}
