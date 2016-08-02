import React, { Component } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DownMenu extends Component {
  render() {
  	return(
		    <View style= {styles.downBanner}>
            <View style={styles.downBannerIcons}>
              <Icon name="videocam" size={27} color="#676767"/>
            </View>
            <View style={styles.downBannerIcons}>
              <Icon name="mic" size={27} color="#676767"/>
             </View>        
             <View style={styles.downBannerIcons}>
              <Icon name="subject" size={27} color="#676767" /> 
            </View>
            <View style={styles.downBannerIcons}>  
              <Icon name="attach-file" size={24} color="#676767" />
            </View>  
       </View> 
  	)
  }
}

const styles = StyleSheet.create({
  downBanner: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 0.7,
    borderTopColor: '#a8a8a8',
    backgroundColor:'#f9f9f9',
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    height:40
  },
  downBannerIcons: {
  flex :1, 
  height:40,  
  alignItems: 'center',
  justifyContent : 'center'
  }
});
