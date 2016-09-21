import { connect } from 'react-redux'
import HomeNotebooks from '../components/HomeNotebooks'
import { deleteNotebook } from '../actionCreators/notebookActions'
import Router from '../navigation/Router'

const mapStateToProps = (state, ownProps) => { 
	return {

		navigate: (route) => { ownProps.navigator.push(Router.getRoute(route))},
		notebooks: state.notebooks,
		addNotebook: () => { ownProps.navigator.push(Router.getRoute('CreateNotebook'))},
		openNotebook: (id,name) => {ownProps.navigator.push(Router.getRoute('Notebook',{name: name, id: id}))}


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