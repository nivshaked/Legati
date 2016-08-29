
jest.unmock('../../reducers/textTask.js');

import textTask from '../../reducers/textTask.js';
import { addTextTask }  from '../../actionCreators/notebookActions.js';

describe('actionCreator', () =>{
	it('creates and object with text and title' , () => { 
		stateAfter = {type : "ADD_TEXT_TASK", payload : {text : 'moshe', title : 'haim'}};
		expect(addTextTask({title : 'haim', text:'moshe'})).toEqual(stateAfter);
	});
});


describe('Add text task with text only(without a title)', () =>{
	it('adds a new textTask to the textTask object where the key is the id and the value has only text ( without a title) ' , () => { 
		const stateBefore = {};
		const action = addTextTask({text: 'hello li'});
		const stateAfter = {1 : {text: 'hello li', title:false, networkStatus: 'unsent'}};
		
		expect(textTask(stateBefore,action)).toEqual(stateAfter);
	});
});

describe('Add text task with title only', () =>{
	it('adds a new textTask to the textTask object where the key is the id and the value has only title ( without text ) ' , () => { 
		const stateBefore = {};
		const action = addTextTask({title: "SCALES"});
		const stateAfter = {1 : {title: 'SCALES', text: false, networkStatus: 'unsent'}};
		
		expect(textTask(stateBefore,action)).toEqual(stateAfter);
	});
});

describe('Add text task', () =>{
	it('adds a new textTask to the textTask object where the key is the id and the value has both text and title' , () => { 
		const stateBefore = {};
		const action = addTextTask({title: "SCALES", text: "you should really practice them"});
		const stateAfter = {1 : {title: 'SCALES', text: "you should really practice them", networkStatus: 'unsent'}};
		
		expect(textTask(stateBefore,action)).toEqual(stateAfter);
	});
});


