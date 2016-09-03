import { combineReducers } from 'redux'
import user from './user'
import notebooks from './notebooks'
import notebooksById from './notebooksById'

const legatiApp = combineReducers({
	user,
	notebooks,
	notebooksById

});

export default legatiApp;