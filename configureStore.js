import { createStore } from 'redux';
import legatiApp from './reducers/index';
import { loadState, saveState } from './AsyncStorage';

const configureStore = () => { 
	  
	const store = createStore(
	legatiApp
		);
	store.subscribe(() => {
		saveState(store.getState());
	});
	loadState(store)
	return store;
	
	
}

export default configureStore;