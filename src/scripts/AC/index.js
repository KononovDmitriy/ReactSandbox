import {DELETE_ARTICLE, INCREMENT, UPDATE_SELECT_BOX, UPDATE_DATE_RANGE} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function updateSelectBox(selected) {
    return {
        type: UPDATE_SELECT_BOX,
        payload: { selected }
    }
}

export function updateDateRange() {
    return {
        type: UPDATE_DATE_RANGE,
    }
}
