import { combineReducers } from 'redux';
import user from './user';
import notebooks from './notebooks';


const legatiApp = combineReducers({
	user,
	notebooks

});

export default legatiApp;