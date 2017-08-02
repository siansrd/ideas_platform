import { FETCH_IDEAS, FETCH_IDEA, DELETE_IDEA } from '../actions'
import _ from 'lodash'

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_IDEAS: 
      return _.mapKeys(action.payload.data, 'id')
    case FETCH_IDEA:
      return { ...state, [action.payload.data.id]: action.payload.data }
    case DELETE_IDEA:
      return _.omit(state, action.payload)
    default:
      return state
  }
}