import {normalizedComments as defaulComments} from '../fixtures'
import {} from '../constants'

const commentsMap = defaulComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default (commentsState = commentsMap, action) => {
    const {type, payload} = action

    console.log('--------Comments-------')
    console.dir(commentsState)
    console.log('-----------------------')

    switch (type) {
    }

    return commentsState
}
