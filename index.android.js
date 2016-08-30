import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from './configureStore'
import legatiApp from './reducers/index'
import Button from 'react-native-button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SignUp from './components/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeNotebooks from './components/HomeNotebooks'
import HomeNotebooksContainer from './containers/HomeNotebooksContainer'
import CreateNotebookContainer from './containers/CreateNotebookContainer'
import SignUpStudent from './components/SignUpStudent'
import SignUpTeacher from './components/SignUpTeacher'
import Home from './components/Home'
import CreateNotebook from './components/CreateNotebook'
import AddText from './components/AddText'
import Notebook from './components/Notebook'
import Router from './navigation/Router'


import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Navigator,
  StatusBar
} from 'react-native';

import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from '@exponent/ex-navigation';
/*const store = configureStore();*/
/*const apiMiddleware = ({dispatch, getState}) => next => action => { 
  
}*/

const store = configureStore();
const navigationContext = new NavigationContext({store, Router});
/*configureScene={() => {
                    return Navigator.SceneConfigs.FadeAndroid;
      }}*/

class legati extends Component {

  render() {
    return (
      <Provider store={store}>
          <NavigationProvider router={Router}>
              <StatusBar translucent={true} />
              <StackNavigation initialRoute={Router.getRoute('HomeNotebooks')}/>
          </NavigationProvider>
      </Provider>
      )
  }
}




AppRegistry.registerComponent('legati', () => legati)

{/*<Navigator
      initialRoute = {{name : 'HomeNotebooks', HomeNotebooksContainer}}
      
      renderScene={(route, navigator) => {
       
      switch (route.name) { 
        case "HomeNotebooks":
          return <HomeNotebooksContainer navigator={navigator}/>  
        case "Notebook":
          return <Notebook name={route.studentName} navigator={navigator}/>
        case "CreateNotebook":
          return <CreateNotebookContainer navigator={navigator}/>    
         }}
       }

      />*/}