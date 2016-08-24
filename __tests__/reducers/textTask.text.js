
jest.unmock('../../reducers/textTask.js');

import textTask from '../../reducers/textTask.js';
import { addNotebook }  from '../../actionCreators/notebookActions.js';

/*describe('actionCreator', () =>{
	it('creates and object with name and id' , () => { 
		stateAfter = {type : 'ADD_NOTEBOOK', name : 'moshe'};
		expect(addNotebook('moshe')).toEqual(stateAfter);
	});
});*/


describe('Add text task with text only(without a title)', () =>{
	it('adds a new textTask to the textTask object where the key is the id and the value has only text ( without a title) ' , () => { 
		const stateBefore = {};
		const action = addTextTask({text: 'hello li', shared : false, network : 'sent'});
		const stateAfter = [{name: 'elad', id: 1}, {name: 'niv', id: 2}, {name : 'moshe', id : 9}];
		console.log(notebooks(stateBefore,action));
		expect(notebooks(stateBefore,action)).toEqual(stateAfter);
	});
});

describe('Add text task with title only', () =>{
	it('adds a new textTask to the textTask object where the key is the id and the value has only title ( without text ) ' , () => { 
		const stateBefore = {};
		const action = addNotebook('moshe');
		const stateAfter = [{name: 'elad', id: 1}, {name: 'niv', id: 2}, {name : 'moshe', id : 9}];
		console.log(notebooks(stateBefore,action));
		expect(notebooks(stateBefore,action)).toEqual(stateAfter);
	});
});

describe('Add text task', () =>{
	it('adds a new textTask to the textTask object where the key is the id and the value has both text and title' , () => { 
		const stateBefore = {};
		const action = addNotebook('moshe');
		const stateAfter = [{name: 'elad', id: 1}, {name: 'niv', id: 2}, {name : 'moshe', id : 9}];
		console.log(notebooks(stateBefore,action));
		expect(notebooks(stateBefore,action)).toEqual(stateAfter);
	});
});


