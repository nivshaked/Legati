import { connect } from 'react-redux'
import AddText from '../components/AddText'
import { deleteNotebook } from '../actionCreators/notebookActions'
import Router from '../navigation/Router'

const mapStateToProps = (state, ownProps) => { 
	return {
		notebooks: state.notebooks,
		navigate: (route) => { ownProps.navigator.push(Router.getRoute(route))},
		
		};


	};


const mapDispatchToProps = (dispatch) => {
	return {
		addTextTask : ({id,text,title,shared}) => dispatch(deleteNotebook(id))
	};
};

const AddTextContainer = connect(
	mapStateToProps,
	mapDispatchToProps
	)(AddText);

export default AddTextContainer;