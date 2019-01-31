import {UPDATE_SELECT_BOX, UPDATE_DATE_STATE} from '../constants'

const DefaultFilters = {
  selected: [],
  dateState: {
        from: null,
        to: null
    }
};

export default (filtersState = DefaultFilters, action) => {
    const {type, payload} = action

    switch (type) {
        case UPDATE_SELECT_BOX:
          return Object.assign({}, filtersState, {selected: payload.selected})

        case UPDATE_DATE_STATE:
           return Object.assign({}, filtersState, {dateState: payload.dateState})
    }

    return filtersState
}
