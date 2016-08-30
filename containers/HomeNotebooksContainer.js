import { connect } from 'react-redux';
import HomeNotebooks from '../components/HomeNotebooks';
import { deleteNotebook } from '../actionCreators/notebookActions';
import Router from '../navigation/Router';
const mapStateToProps = (state, ownProps) => { 
	return {
		notebooks: state.notebooks,
		addNotebook: () => { ownProps.navigator.push(Router.getRoute('CreateNotebook'))},
		openNotebook: (id,name) => {ownProps.navigator.replace(Router.getRoute('Notebook',{name: name}))}

	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteNotebook : (id) => dispatch(deleteNotebook(id))
	};
};

const HomeNotebooksContainer = connect(
	mapStateToProps,
	mapDispatchToProps
	)(HomeNotebooks);

export default HomeNotebooksContainer;