import React from 'react'
import {connect} from 'react-redux'
import {toggleOpenArticleId} from '../AC'

export default Component => {
  class Accordion extends React.Component {

      render() {
          const { openItemId } = this.props
          return <Component {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = {openItemId}/>
      }

      toggleOpenItem = openItemId => ev => {
          this.props.toggleOpenArticleId(openItemId === this.props.openItemId ? null : openItemId)
      }
  }

  return connect((state) => ({
    openItemId: state.openArticleId
  }), { toggleOpenArticleId })(Accordion)
}
