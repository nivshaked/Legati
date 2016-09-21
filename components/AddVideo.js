import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from './Header'
import CreateTaskBar from './CreateTaskBar'

import {
  StyleSheet,
  Text,
  TextInput,
  Picker,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  View
} from 'react-native'

import Video from 'react-native-video'
//<CreateTaskBar notebooks={this.props.notebooks} selectedStudentId={this.props.notebooks[2].id}/> 
export default class AddVideo extends Component { 
  constructor(props){
		super(props)
		this.state = {student: "", shared : false};
	}

  static route = {
    navigationBar : {
      title : "Add Video",
      tintColor : "white",
      backgroundColor : "#179fda"
    }
  }
  render() {
    
  	return(
  		<View style={{flex:1}}>

  			<View style={{borderWidth:3, borderColor: '#fed564', flex:1, alignItems : 'center'}}>
  				<View style={{marginTop: 10, marginLeft: 10, marginRight:10, flex:1}}>
  					<TextInput style={{fontSize: 20,fontWeight:'bold', height: 50, width:315}} placeholder={this.props.route.params.url.path} underlineColorAndroid= 'transparent' />
  				</View>
  				<Video
            source={{uri: this.props.route.params.url.path}} 
            rate={1.0}                   // 0 is paused, 1 is normal.
            volume={1.0}                 // 0 is muted, 1 is normal.
            muted={false}                // Mutes the audio entirely.
            paused={false}  
            repeat={true}  
            resizeMode="cover"   
            playWhenInactive={false}        // Pauses playback entirely.
            style={{height : 300, width : 350, marginBottom : 100}}
          />
  			</View>

        

  			
  		</View>
  	)
  }
}
