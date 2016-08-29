
/*const initialState = {0 : {text : "please do", title : "practice scales", networkStatus:'unsent'}};*/
const textTask = (state = {}, action) => {
		switch (action.type) { 
			case "ADD_TEXT_TASK":
				return {
					...state,
					[id] : {title : action.payload.title, text: action.payload.text, networkStatus : 'unsent'}
				}
		default:
			return state;
		} 
		

		


};

export default textTask;