import { combineReducers } from 'redux'
import IdeasReducer from './ideas_reducer'

const rootReducer = combineReducers({
  ideas: IdeasReducer
});

export default rootReducer;