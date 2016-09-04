/*const teststate = [{name:'elad', id:1},{name:'niv', id:2},{name:'loli', id:3},{name:'sotom', id:4}];*/
const notebooks = (state = [], action) => {
	switch (action.type) { 
		case "ADD_NOTEBOOK":
			return [
				...state,
				{ name : action.payload.name, id : action.payload.id}
			];
		case "DELETE_NOTEBOOK":
			return state.filter((notebook) => {
				return notebook.id !== action.payload.id;
			});

		case "LOAD_STORAGE":
			return action.payload.notebooks;
		default:
			return state;	

	}


};

export default notebooks;