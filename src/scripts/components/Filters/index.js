import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {updateSelectBox, updateDateState} from './../../AC'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array,
        selectedArticles: PropTypes.array,
        date: PropTypes.object
    };

    render() {
        const {
          articles,
          selectedArticles,
          date,
          updateSelectBox,
          updateDateState
        } = this.props
        return (
            <div>
                <SelectFilter
                  articles = {articles}
                  handleChange = {updateSelectBox}
                  selected = {selectedArticles}
                 />
                <DateRange
                  dateState = {date}
                  handleClick = {updateDateState}
                />
            </div>
        )
    }

    handleSelectUpdate = (selected) => {
      this.props.updateSelectBox(selected);
    }
}

export default connect(state =>({
  articles: state.articles,
  selectedArticles: state.articleFilters.selected,
  date: state.articleFilters.dateState
}), {
  updateSelectBox,
  updateDateState
})(Filters)

