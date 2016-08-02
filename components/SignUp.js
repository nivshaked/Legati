import React, { Component } from 'react';
import Button from './Button.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignUp2 from './SignUp2';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  View
} from 'react-native';


export default class SignUp extends Component { 

	constructor(){
		super()
		this.state= {language:""};
	}

  render() {
  	return(
  		
  			<ScrollView  contentContainerStyle={{ alignItems: 'center'}}>
  	   			<Image source={require('../images/legatiLogo.png')} style= {{width:250, height:130, marginTop: 30}}/>
  				<TextInput style={{height: 50, width:300}} placeholder="First Name" />
  				<TextInput style={{height: 50, width:300}} placeholder="Last Name" />
  				<TextInput secureTextEntry={true} style={{height: 50, width:300}} placeholder="Password" />
  				<TextInput secureTextEntry={true} style={{height: 50, width:300}} placeholder="Verify Password" />
  				<TextInput style={{height: 50, width:300}} keyboardType= 'email-address' placeholder="Email address" />
  				
  				<View style= {{flex:1, flexDirection : 'row', width:300, height: 60, marginTop:5}}>
  					<Text style={{flex:1, fontSize: 17}}> I am a: </Text>
  					<Picker style={{flex:4, height:25}}
  					selectedValue={this.state.language}
  					onValueChange={(lang) => this.setState({language: lang})}>
  					<Picker.Item label="Student" value="Student" />
  					<Picker.Item label="Teacher" value="Teacher" />
  					<Picker.Item label="Parent" value="Parent" />
					</Picker>
  				</View>
  				<Button onPress={() => this.props.navigator.push({ name: 'SignUp2', SignUp2})}>
  					Continue
  				</Button>
  				
  			</ScrollView>
  		
  	)
  }
}