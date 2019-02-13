import { TOGGLE_OPEN_ARTICLE_ID } from '../constants'

export default (openArticleId = null, action) => {
  const { type, payload } = action

  switch(type) {
    case TOGGLE_OPEN_ARTICLE_ID:
      return payload.openArticleId
  }

  return openArticleId
}
