import { ADD_NOTEBOOK, DELETE_NOTEBOOK } from "./actionTypes";

export const addNotebook = (name) => ({
	type : ADD_NOTEBOOK,
	name : name
});

export const deleteNotebook = (id) => ({
	type : DELETE_NOTEBOOK,
	id : id 
});
