import { connect } from 'react-redux';
import HomeNotebooks from '../components/HomeNotebooks';

const mapStateToProps = (state, ownProps) => { 
	return {
		notebooks: state.notebooks,
		addNotebook: () => { ownProps.navigator.push({name : 'CreateNotebook'})},
		openNotebook: (id,name) => {ownProps.navigator.push({name:'Notebook', id:id, studentName:name})}

	};
}



const HomeNotebooksContainer = connect(
	mapStateToProps
	)(HomeNotebooks);

export default HomeNotebooksContainer;