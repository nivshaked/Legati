import React, { Component } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = ({children, icon, mode, id}) => {
    if (mode == "edit") { 
      return(
        <View style={styles.editBannerView}>    
            <Icon style={{ marginLeft:16 }} name="keyboard-arrow-left" size={27} color="white"/>
            <View style={{flex:0, flexDirection : 'row', marginRight: 15 }}>
                <Icon style={{ marginLeft:25 }} name="edit" size={25} color="white"/>
                <Icon style={{ marginLeft:25 }} name="delete" size={25} color="white"/>
            </View>
        </View>
    );
  	}

    return(
        <View style={styles.headBannerView}>    
            <Icon style={{ marginLeft:16 }} name={icon} size={27} color="white"/>
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
  },
  editBannerView: { 
    height: 45,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#0087c1"
  }
});


export default Header;