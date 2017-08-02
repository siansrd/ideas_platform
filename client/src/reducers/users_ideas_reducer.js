import { FETCH_IDEAS_BY_USER } from '../actions'

export default function( state = {}, action ) {
  switch(action.type) {
    case FETCH_IDEAS_BY_USER:
      return action.payload.data
    default:
      return state
  }
}