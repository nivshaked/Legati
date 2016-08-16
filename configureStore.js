import { createStore } from 'redux';
import legatiApp from './reducers/index';
import { loadState, saveState } from './AsyncStorage';

const configureStore = () => { 
	console.log(loadState);
	console.log(loadState());
	const persistedState = loadState();
	  
	const store = createStore(
	legatiApp,
	persistedState
		);
	store.subscribe(() => {
		saveState(store.getState());
	});

	return store;
	
	
}

export default configureStore;