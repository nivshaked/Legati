jest.unmock('../../reducers/notebooksById.js');

import notebooksById from '../../reducers/notebooksById.js';
import { addNotebook }  from '../../actionCreators/notebookActions.js';


describe('Add notebook to notebooksById', () => {
	it('Adds a new notebook by id, that contains the name of the notebook, a list of people it is shared with or false, and a list of lesson ids' , () => { 
		const stateBefore = {0 : {name: "ad", shared: ["ad@gmail.com"], instrument : "piano", years:7, lessons : ["dsw22", "asd33"]}};
		const action = addNotebook({name : "elad", shared: "sadaww@gmail.com", instrument:"violin", years:7});
		const stateAfter = {0 : {name: "ad", shared: ["ad@gmail.com"], instrument : "piano", years: 7, lessons : ["dsw22", "asd33"]}, 1 : {name: "elad", shared: ["sadaww@gmail.com"], instrument : "violin", years:7, lessons : []}};
		
		expect(notebooksById(stateBefore,action)).toEqual(stateAfter);
	});
});