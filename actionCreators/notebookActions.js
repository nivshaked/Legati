import { ADD_NOTEBOOK, DELETE_NOTEBOOK, ADD_TEXT_TASK } from "./actionTypes";

export const addNotebook = ({name, shared, instrument, years}) => ({
	type : ADD_NOTEBOOK,
	payload : { name : name,
				shared : shared,
				instrument : instrument,
				years : years}
});

export const deleteNotebook = (id) => ({
	type : DELETE_NOTEBOOK,
	payload : {id : id} 
});

export const addTextTask = ({text = false, title = false}) => ({
	type : ADD_TEXT_TASK,
	payload : {text : text, title : title}
});
