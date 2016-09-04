import { connect } from 'react-redux';
import CreateNotebook from '../components/CreateNotebook';
import Router from '../navigation/Router'
import { addNotebook } from '../actionCreators/notebookActions.js'

const mapStateToProps = (state, ownProps) => { 
	return {
		notebooks: state.notebooks,
		createNotebook : () => { ownProps.navigator.pop()}

	};
};

const mapDispatchToProps = (dispatch) => { 
	return {
		addNotebook: ({name,years,shared,instrument}) => { dispatch(addNotebook({name,years,shared,instrument}))}
	};
};


const CreateNotebookContainer = connect(
	mapStateToProps,
	mapDispatchToProps
	)(CreateNotebook);

export default CreateNotebookContainer;