import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {updateSelectBox, updateDateRange} from './../../AC'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const { articles, selectedArticles } = this.props
        return (
            <div>
                <SelectFilter
                  articles = {articles}
                  handleChange = {this.handleSelectUpdate}
                  selected = {selectedArticles}
                 />
                <DateRange />
            </div>
        )
    }

    handleSelectUpdate = (selected) => {
      this.props.updateSelectBox(selected);
    }
}

export default connect(state =>({
  articles: state.articles,
  selectedArticles: state.articleFilters.selected
}), {
  updateSelectBox,
  updateDateRange
})(Filters)

