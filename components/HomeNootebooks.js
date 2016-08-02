import React, { Component } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class HomeNootebooks extends Component {
  render() {
  	return(
		    <View style={{flex : 1, flexDirection : 'row', flexWrap : 'wrap'}}>
        
          <Image source={require('../images/notebook.png')} style={{marginTop : 15, marginLeft : 10  , width:107, height:78, borderColor : '#179fda', borderWidth : 0.7}}>
            <View style={styles.backdropView}>
                <Text style={styles.headline}>
                    רון
                </Text>
            </View>
          </Image>
          <Image source={require('../images/notebook.png')} style={{marginTop : 15, marginLeft : 10  , width:107, height:78, borderColor : '#fed564', borderWidth : 0.7 }}/>
          <Image source={require('../images/notebook.png')} style={{marginTop : 15, marginLeft : 10  , width:107, height:78, borderColor : '#c7202c', borderWidth : 0.7 }}/>
          <Image source={require('../images/notebook.png')} style={{marginTop : 15, marginLeft : 10  , width:107, height:78, borderColor : '#179fda', borderWidth : 0.7 }}/>
          <Image source={require('../images/notebook.png')} style={{marginTop : 15, marginLeft : 10  , width:107, height:78, borderColor : '#fed564', borderWidth : 0.7 }}>
          <View style={styles.backdropView}>
                <Text style={styles.headline}>
                     <Icon name="add" size={50} color="black"/>
                </Text>
            </View>
          </Image>

        </View>
  	)
  }
}

const styles = StyleSheet.create({
  backdropView: {
    flex:1,
    justifyContent : 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  headline: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black'
  }
});
