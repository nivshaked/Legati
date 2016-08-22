import { LOAD_STORAGE } from "./actionTypes";

export const loadStorage = (data) => ({
	type : LOAD_STORAGE,
	payload : data 
});