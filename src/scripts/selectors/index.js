import {createSelector} from 'reselect'

const filtersGetter = state => state.filters
const articlesListGetter = state => state.articlesList
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

// export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
//     const {selected, dateRange: {from, to}} = filters
//     console.log('---', 'recomputing filtration')

//     return articles.filter(article => {
//         const published = Date.parse(article.date)
//         return (!selected.length || selected.includes(article.id)) &&
//             (!from || !to || (published > from && published < to))
//     })
// })

export const filtratedArticlesSelector = createSelector(articlesListGetter, articlesGetter, filtersGetter, (articlesList, articles, filters) => {
  const {selected, dateRange: {from, to}} = filters
  console.log('---', 'recomputing filtration')

  let ff = articlesList.filter(articleId => {
    let article = articles[articleId]

    const published = Date.parse(article.date)
    return (!selected.length || selected.includes(article.id)) &&
      (!from || !to || (published > from && published < to))
  })

  console.dir(ff)
  return ff
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    console.log('---', 'getting comment', id)
    return comments[id]
})
