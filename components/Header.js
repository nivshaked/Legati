import React, { Component } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = ({children, icon}) => {
  	return(
		    <View style={styles.headBannerView}>    
            <Icon style={{marginLeft:16}} name={icon} size={27} color="white"/>
            <Text style={styles.titleText}> {children} </Text>
        </View>
  	);
  };

const styles = StyleSheet.create({
  titleText: {
    marginLeft: 15,
    fontFamily: 'sans-serif',
    fontSize: 22,
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