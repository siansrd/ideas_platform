import { combineReducers } from 'redux'
import IdeasReducer from './ideas_reducer'
import UserReducer from './user_reducer'
import IdeasByUserReducer from './users_ideas_reducer'
import { reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  ideas: IdeasReducer,
  ideasByUser: IdeasByUserReducer,
  user: UserReducer,
  form: formReducer
});

export default rootReducer;