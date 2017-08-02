import { combineReducers } from 'redux'
import IdeasReducer from './ideas_reducer'
import { reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  ideas: IdeasReducer,
  form: formReducer
});

export default rootReducer;