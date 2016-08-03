import React, { Component } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeNotebooks from './components/HomeNotebooks';
import SignUp2 from './components/SignUp2';
import Home from './components/Home';
import AddNotebook from './components/AddNotebook';

import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Navigator
} from 'react-native';

class legati extends Component {

  render() {
    return (

      <Navigator
      initialRoute = {{name : 'SignUp', SignUp}}
      configureScene={() => {
                    return Navigator.SceneConfigs.FloatFromRight;
      }}
      renderScene={(route, navigator) => {
       // count the number of func calls
      console.log(route, navigator); 
      if (route.name == 'SignUp') { 
        return <SignUp navigator={navigator}/>  
        } else { 
          return <SignUp2 navigator={navigator}/>
        }      
      }}
      />

      )
  }
}




AppRegistry.registerComponent('legati', () => AddNotebook);
