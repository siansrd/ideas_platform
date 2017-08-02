import { FETCH_USER } from '../actions' 

export default function(state = {}, action){
  switch(action.type){
    case FETCH_USER:
      console.log("user payload in reducer", action.payload)
      return action.payload.data
    default:
      return state
  }
}