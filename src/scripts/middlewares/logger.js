export default store => next => action => {
    const jsState = {
      ... store.getState(),
      articles: store.getState().articles.toJS(),
      comments: store.getState().comments.toJS(),
    }

    console.log('---', 'state before: ', jsState)
    console.log('---', 'dispatching', action)
    next(action)
    console.log('---', 'state after: ', jsState)
}
