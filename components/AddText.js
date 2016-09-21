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

export default class AddText extends Component { 
  constructor(props){
		super(props)
		this.state = {student: "", shared : false};
	}

  static route = {
    navigationBar : {
      title(params) {
        if (params.title) { 
            return params.title;
        }
        
        return  'Add Text';
      },
      tintColor : "white",
      backgroundColor : "#179fda"
    }
  }

  render() {
  	return(
  		<View style={{flex:1}}>

  			<View style={{borderWidth:3, borderColor: '#fed564', flex:1, alignItems : 'center'}}>
  				<View style={{marginTop: 10, marginLeft: 10, marginRight:10, flex:1}}>
  					<TextInput style={{fontSize: 20,fontWeight:'bold', height: 50, width:315}} placeholder="Title" underlineColorAndroid= 'transparent' />
  				</View>
  				<View style={{marginLeft: 10, marginRight:10, flex:13}}>
  					<TextInput style={{fontSize: 18, width:315, flex:1, textAlignVertical : 'top'}}  multiline={true} placeholder="Content" underlineColorAndroid= 'transparent' />
  				</View>
  			</View>

        <CreateTaskBar notebooks={this.props.notebooks} selectedStudentId={this.props.notebooks[2].id}/>

  			
  		</View>
  	)
  }
}
