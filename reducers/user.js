const user = (state = {}, action) => { 
	switch (action.type) { 
		case "LOG_IN":
			return {
				...state,  
				username : action.username,
				password : action.password,
				profile : action.profile,
				instrument : action.instrument
			};
		case "LOG_OUT":
			return {

			};

		default:
			return state;	
	}

};




export default user;