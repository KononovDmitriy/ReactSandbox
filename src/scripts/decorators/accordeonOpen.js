import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        openArticleId: null
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state}
            toggleOpen = {this.toggleOpen.bind(this)}/>
    }

    toggleOpen = (currentArticleId) => {

        if (this.state.openArticleId !== currentArticleId) {
          this.setState({
            openArticleId: currentArticleId
          });
        } else {
          this.setState({
            openArticleId: null
          });
        }
    }
}
