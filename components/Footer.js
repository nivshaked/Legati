import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

export default class Footer extends Component {

  _onPress(route){
    this.props.navigate(route)  
  }

  render() {
  	return(
		    <View style= {styles.footer}>
          <TouchableHighlight  underlayColor='#eeeeee' style={{flex :1, height:40}} activeOpacity={0.5} onPress={() => this._onPress('attach')}>
            <View style={styles.footerIcons}>  
              <Icon name="attach-file" size={24} color="#676767" />
            </View> 
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#eeeeee' style={{flex :1, height:40}} activeOpacity={0.5} onPress={() => this.props.navigate('Camera', {navigate : this.props.navigate})}>
            <View style={styles.footerIcons}>
              <Icon name="videocam" size={28} color="#676767"/>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#eeeeee' style={{flex :1, height:40}} activeOpacity={0.5} onPress={() => this._onPress('mic')}>
            <View style={styles.footerIcons}>
              <Icon name="mic" size={27} color="#676767"/>
             </View>
          </TouchableHighlight>     
          <TouchableHighlight underlayColor='#eeeeee' style={{flex :1, height:40}} activeOpacity={0.5} onPress={() => this._onPress('AddText')}>   
             <View style={styles.footerIcons}>
              <Icon name="subject" size={25} color="#676767" /> 
            </View>
          </TouchableHighlight>
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
