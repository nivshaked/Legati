/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View
} from 'react-native';

class legati extends Component {

  render() {
    return (
      <View style={{backgroundColor: "white", flex: 1}}>
      
       
        <View style={styles.headBannerView}>    
            <Icon style={{marginLeft:10}} name="menu" size={27} color="white"/>
            <Text style={styles.titleText}> Home </Text>
        </View>

        <View style={{flex : 1, flexDirection : 'row', flexWrap : 'wrap'}}>
        
          <Image source={require('./images/notebook.png')} style={{marginTop : 15, marginLeft : 10  , width:107, height:78, borderColor : '#179fda', borderWidth : 0.7}}>
            <View style={styles.backdropView}>
                <Text style={styles.headline}>
                    רון
                </Text>
            </View>
          </Image>
          <Image source={require('./images/notebook.png')} style={{marginTop : 15, marginLeft : 10  , width:107, height:78, borderColor : '#fed564', borderWidth : 0.7 }}/>
          <Image source={require('./images/notebook.png')} style={{marginTop : 15, marginLeft : 10  , width:107, height:78, borderColor : '#c7202c', borderWidth : 0.7 }}/>
          <Image source={require('./images/notebook.png')} style={{marginTop : 15, marginLeft : 10  , width:107, height:78, borderColor : '#179fda', borderWidth : 0.7 }}/>
          <Image source={require('./images/notebook.png')} style={{marginTop : 15, marginLeft : 10  , width:107, height:78, borderColor : '#fed564', borderWidth : 0.7 }}>
          <View style={styles.backdropView}>
                <Text style={styles.headline}>
                     <Icon name="add" size={50} color="black"/>
                </Text>
            </View>
          </Image>

        </View>
       <View style= {styles.downBanner}>
        <View style={styles.downBannerIcons}>
          <Button style={{color: 'black'}}> 
           <Icon name="videocam" size={27} color="#676767"/>
          </Button>
          <Button style={{color: 'black'}}>
           <Icon name="mic" size={27} color="#676767"/>
          </Button>
          <Button style={{color: 'black'}}>
          <Icon name="subject" size={27} color="#676767" /> 
          </Button>
          <Button style={{color: 'black'}}>
           <Icon name="attach-file" size={24} color="#676767" />
          </Button>
        </View>
       </View> 
      </View>
      )
  }
}

const styles = StyleSheet.create({
  titleText: {
    marginLeft: 10,
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
  downBanner: {
    position: 'absolute',
    flex:1,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 0.7,
    borderTopColor: '#a8a8a8',
    backgroundColor:'#f9f9f9'
  },
  downBannerIcons: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 30,
    height:40

  },
  // TEST 
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


AppRegistry.registerComponent('legati', () => legati);
