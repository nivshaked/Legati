import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeNotebooksContainer from '../containers/HomeNotebooksContainer'
import CreateNotebookContainer from '../containers/CreateNotebookContainer'
import SignUpStudent from '../components/SignUpStudent'
import SignUpTeacher from '../components/SignUpTeacher'
import SignUp from '../components/SignUp'
import AddTextContainer from '../containers/AddTextContainer'
import Notebook from '../components/Notebook'


const Router = createRouter(() => ({
  HomeNotebooks: () => HomeNotebooksContainer,
  Notebook: () => Notebook,
  CreateNotebook: () => CreateNotebookContainer,
  AddText: () => AddTextContainer,
  SignUp: () => SignUp,
  SignUpStudent: () => SignUpStudent,
  SignUpTeacher: () => SignUpTeacher
}));

export default Router