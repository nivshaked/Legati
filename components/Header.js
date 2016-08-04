import React, { Component } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = ({children}) => {
  	return(
		    <View style={styles.headBannerView}>    
            <Icon style={{marginLeft:10}} name="menu" size={27} color="white"/>
            <Text style={styles.titleText}> {children} </Text>
        </View>
  	);
  };

const styles = StyleSheet.create({
  titleText: {
    marginLeft: 10,
    fontFamily: 'sans-serif',
    fontSize: 20,
    color: 'white'
  },
  headBannerView: {
    height: 45,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: "#179fda"
  }
});


export default Header;