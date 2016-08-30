import { connect } from 'react-redux';
import CreateNotebook from '../components/CreateNotebook';
import Router from '../navigation/Router'

const mapStateToProps = (state, ownProps) => { 
	return {
		notebooks: state.notebooks,
		createNotebook : () => { ownProps.navigator.pop()}

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