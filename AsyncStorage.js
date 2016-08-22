import { AsyncStorage } from 'react-native';
import { loadStorage } from './actionCreators/asyncActions'

export const loadState = (store) => { 
		AsyncStorage.getItem('state').then((data) => {
		const parsedData = JSON.parse(data);
		console.log(parsedData);
        store.dispatch(loadStorage(parsedData));
       });
};

export const saveState = (state) => { 
		try { 
			console.log(state);
			const serializedState = JSON.stringify(state);
			console.log(serializedState);
			AsyncStorage.setItem('state', serializedState);

		} catch(err) { 
			console.log(err);
		}


}