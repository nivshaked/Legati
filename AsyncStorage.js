import { AsyncStorage } from 'react-native';

export const loadState = () => { 
		try { 
			 AsyncStorage.getItem('state').then((data) => {
			 	console.log(data);
			 	/*if (data === null) { 
					return undefined;
				} */
				console.log(data);
				console.log(JSON.parse(data));
				return JSON.parse(data);
			 });
			 
		} catch (err) { 
			console.log('error');
			console.log(err);
			return 1;
		}

};

export const saveState = (state) => { 
		try { 
			const serializedState = JSON.stringify(state);
			console.log(serializedState);
			AsyncStorage.setItem('state', serializedState);

		} catch(err) { 
			console.log(err);
		}


}