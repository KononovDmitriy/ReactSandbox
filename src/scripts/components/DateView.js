import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css';
import './dateView.css';

class Date extends Component {
  state = {
    startDate: '',
    endDate: ''
  }

  render() {
    return (
      <div className="date-wrapper">
        <div className="flex-wrapper">
          <div className="date-wrapper-out">
            <div className="date-wrapper-inc">Date from:</div>
            <DayPickerInput id="day-1" onDayChange={this.onDayChange.bind(this)}/>
          </div>
          <div className="date-wrapper-out">
            <div className="date-wrapper-inc">Date to:</div>
            <DayPickerInput id="day-2" onDayChange={this.onDayChange.bind(this)}/>
          </div>
        </div>
        <div>
          start date: {this.state.startDate}<br />
          end date: {this.state.endDate}
        </div>
      </div>
    );
  }

  onDayChange(day, modifiers, dayPickerInput) {
    let formatDate = (day) ? day.toDateString() : '';

    switch(dayPickerInput.props.id) {
      case 'day-1':
        this.setState({
          startDate: formatDate
        });
        break;
      case 'day-2':
        this.setState({
          endDate: formatDate
        });
        break;
    }
  }
}

export default Date;
