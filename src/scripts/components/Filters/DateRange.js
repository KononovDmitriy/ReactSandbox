import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    static propTypes = {
      dateState: PropTypes.object.isRequired,
      handleClick: PropTypes.func.isRequired
    };

    handleDayClick = (day) => {
        const { handleClick, dateState } = this.props
        handleClick(DateUtils.addDayToRange(day, dateState))
    }

    render() {
        const { from, to } = this.props.dateState;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`

        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default DateRange
