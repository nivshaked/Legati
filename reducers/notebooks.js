const teststate = [{name:'elad', id:1},{name:'niv', id:2},{name:'loli', id:3},{name:'sotom', id:4}];
let id = 8;
const notebooks = (state = teststate, action) => {
	switch (action.type) { 
		case "ADD_NOTEBOOK":
			return [
				...state,
				{ name : action.name, id : id++}
			];
		default:
			return state;	

	}


};

export default notebooks;