import { ADD_NOTEBOOK } from "./actionTypes";

export const addNotebook = (name) => ({
	type : ADD_NOTEBOOK,
	name : name
});
