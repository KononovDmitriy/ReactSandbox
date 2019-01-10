// import {INCREMENT} from '../constants'

const DEFAULT_FILTERS = {
  combobox: null,
  dateRange: null
}

export default (filters = DEFAULT_FILTERS, action) => {
    const {type} = action

    return filters
}