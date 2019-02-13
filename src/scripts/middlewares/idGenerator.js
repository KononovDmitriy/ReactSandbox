import { ADD_COMMENT } from '../constants.js'

const POSSIBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default store => next => action => {
  if (action.type === ADD_COMMENT) {

    let newId = "";


    for (var i = 0; i < 15; i++)
      newId += POSSIBLE.charAt(Math.floor(Math.random() * POSSIBLE.length));

    action.payload.commentId = newId


  }

  next(action)
}
