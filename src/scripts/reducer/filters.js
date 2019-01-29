import {UPDATE_SELECT_BOX, UPDATE_DATE_RANGE} from '../constants'

const DefaultFilters = {
  selected: [],
  dateRange: null
};

export default (filtersState = DefaultFilters, action) => {
    const {type, payload} = action

    switch (type) {
        case UPDATE_SELECT_BOX:
          return Object.assign({}, filtersState, {selected: payload.selected})

        case UPDATE_DATE_RANGE: return filtersState
    }

    return filtersState
}
