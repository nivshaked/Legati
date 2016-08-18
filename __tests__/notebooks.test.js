
jest.unmock('../reducers/notebooks.js');

import notebooks from '../reducers/notebooks.js';
import { addNotebook }  from '../actionCreators/notebookActions.js';

describe('actionCreator', () =>{
	it('creates and object with name and id' , () => { 
		stateAfter = {type : 'ADD_NOTEBOOK', name : 'moshe'};
		expect(addNotebook('moshe')).toEqual(stateAfter);
	});
});


describe('notebooks reducer', () =>{
	it('adds a new notebook with id and name to the state, in an immutable way' , () => { 
		const stateBefore = [{name: 'elad', id: 1}, {name: 'niv', id: 2}];
		const action = addNotebook('moshe');
		const stateAfter = [{name: 'elad', id: 1}, {name: 'niv', id: 2}, {name : 'moshe', id : 9}];
		console.log(notebooks(stateBefore,action));
		expect(notebooks(stateBefore,action)).toEqual(stateAfter);
	});
});


