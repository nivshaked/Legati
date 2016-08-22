import { connect } from 'react-redux';
import CreateNotebook from '../components/CreateNotebook';

const mapStateToProps = (state, ownProps) => { 
	return {
		notebooks: state.notebooks,
		createNotebook : () => { ownProps.navigator.push({name : 'HomeNotebooks'})}

	};
};

const mapDispatchToProps = (dispatch) => { 
	return {
		addNotebook: (name) => { dispatch({type:"ADD_NOTEBOOK", payload : { name : name} } )}
	};
};


const CreateNotebookContainer = connect(
	mapStateToProps,
	mapDispatchToProps
	)(CreateNotebook);

export default CreateNotebookContainer;