
jest.unmock('../../reducers/notebooks.js');

import notebooks from '../../reducers/notebooks.js';
import { addNotebook }  from '../../actionCreators/notebookActions.js';

describe('actionCreator', () =>{
	it('creates and object with name and id' , () => { 
		stateAfter = {type : 'ADD_NOTEBOOK', payload : {name : 'moshe'}};
		expect(addNotebook({name : 'moshe'})).toEqual(stateAfter);
	});
});


describe('notebooks reducer', () =>{
	it('adds a new notebook with id and name to the state, in an immutable way' , () => { 
		const stateBefore = [{name: 'elad', id: 1}, {name: 'niv', id: 2}];
		const action = addNotebook({name : 'moshe'});
		const stateAfter = [{name: 'elad', id: 1}, {name: 'niv', id: 2}, {name : 'moshe', id : 9}];
		console.log(notebooks(stateBefore,action));
		expect(notebooks(stateBefore,action)).toEqual(stateAfter);
	});
});


