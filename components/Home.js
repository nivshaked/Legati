import React, { Component } from 'react';

import Header from './Header';
import DownMenu from './DownMenu';
import HomeNootebooks from './HomeNootebooks';

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
        <HomeNootebooks/>
        <DownMenu/>
      </View>
      )
  }
}