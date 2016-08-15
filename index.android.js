import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import legatiApp from './reducers/index';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeNotebooks from './components/HomeNotebooks';
import HomeNotebooksContainer from './containers/HomeNotebooksContainer';
import CreateNotebookContainer from './containers/CreateNotebookContainer';
import SignUpStudent from './components/SignUpStudent';
import SignUpTeacher from './components/SignUpTeacher';
import Home from './components/Home';
import CreateNotebook from './components/CreateNotebook';
import AddText from './components/AddText';
import Notebook from './components/Notebook';


import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Navigator
} from 'react-native';


let store = createStore(legatiApp);

store.subscribe(() => {AppRegistry.registerComponent('legati', () => legati);});

class legati extends Component {

  render() {
    return (
      <Provider store={store}>
      <Navigator
      initialRoute = {{name : 'HomeNotebooks', HomeNotebooksContainer}}
      configureScene={() => {
                    return Navigator.SceneConfigs.FloatFromRight;
      }}
      renderScene={(route, navigator) => {
       // count the number of func calls
      console.log(route, navigator); 
      switch (route.name) { 
        case "HomeNotebooks":
          return <HomeNotebooksContainer navigator={navigator}/>  
        case "Notebook":
          return <Notebook name={route.studentName} navigator={navigator}/>
        case "CreateNotebook":
          return <CreateNotebookContainer navigator={navigator}/>    
         }}
       }
      />
      </Provider>
      )
  }
}




AppRegistry.registerComponent('legati', () => legati);
