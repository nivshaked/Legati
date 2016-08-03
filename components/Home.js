import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import HomeNotebooks from './HomeNotebooks';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Home extends Component {

  render() {
    return (
      <View style={{backgroundColor: "white", flex: 1}}>
        <Header/>
        <HomeNotebooks/>
        <Footer/>
      </View>
      )
  }
}