import { FETCH_IDEAS, FETCH_IDEA } from '../actions'
import _ from 'lodash'

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_IDEAS: 
      return _.mapKeys(action.payload.data, 'id')
    case FETCH_IDEA:
      return { ...state, [action.payload.data.id]: action.payload.data }
    default:
      return state
  }
}