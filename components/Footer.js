import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Footer extends Component {
  render() {
  	return(
		    <View style= {styles.footer}>
            <View style={styles.footerIcons}>  
              <Icon name="attach-file" size={24} color="#676767" />
            </View> 
            <View style={styles.footerIcons}>
              <Icon name="videocam" size={28} color="#676767"/>
            </View>
            <View style={styles.footerIcons}>
              <Icon name="mic" size={27} color="#676767"/>
             </View>        
             <View style={styles.footerIcons}>
              <Icon name="subject" size={25} color="#676767" /> 
            </View>
             
       </View> 
  	)
  }
}

const styles = StyleSheet.create({
  footer: {
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
  footerIcons: {
  flex :1, 
  height:40,  
  alignItems: 'center',
  justifyContent : 'center'
  }
});
