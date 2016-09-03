/*const teststate = [{name:'elad', id:1},{name:'niv', id:2},{name:'loli', id:3},{name:'sotom', id:4}];*/
let id = 1;

const notebooksById = (state = {}, action) => {
	switch (action.type) { 
		case "ADD_NOTEBOOK":
			return {
				...state,
				[id] : { name : action.payload.name,
						 shared : (action.payload.shared) ? [action.payload.shared] : false,
						 lessons : [],
						 instrument : action.payload.instrument,
						 years : action.payload.years}
			}

		case "LOAD_STORAGE":
			if (action.payload.notebooksById) {
				return action.payload.notebooksById;
			}
			
			return state;
		default:
			return state;	

	}


};

export default notebooksById;