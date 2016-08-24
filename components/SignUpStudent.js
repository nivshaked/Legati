import React, { Component } from 'react';
import Button from './Button.js';
import { MaterialIcons as Icon } from '@exponent/vector-icons';


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


export default class SignUpStudent extends Component { 

	constructor(){
		super()
		this.state= {language:""};
	}

  render() {
  	return(
  			<KeyboardAvoidingView  style={{alignItems: 'center'}}>
  	   			<Image source={require('../images/legatiLogo.png')} style= {{width:210, height:120, marginTop: 30, marginBottom:30}}/>
	
  				<View style= {styles.container}>
  				<Text style={{flex:4, fontSize: 17}}> I am playing the: </Text>
  					<Picker style={{flex:4, height:25}}
  					selectedValue={this.state.language}
  					onValueChange={(lang) => this.setState({language: lang})}>
  					<Picker.Item label="Guitar" value="Guitar" />
  					<Picker.Item label="Piano" value="Piano" />
  					<Picker.Item label="Voice" value="Voice" />
  					<Picker.Item label="Violin" value="Violin" />
  					<Picker.Item label="Trumpet" value="Trumpet" />
					  <Picker.Item label="Guitar" value="Guitar" />
  					<Picker.Item label="Piano" value="Piano" />
  					<Picker.Item label="Voice" value="Voice" />
  					<Picker.Item label="Violin" value="Violin" />
  					<Picker.Item label="Trumpet" value="Trumpet" />
  					<Picker.Item label="Guitar" value="Guitar" />
  					<Picker.Item label="Piano" value="Piano" />
  					<Picker.Item label="Voice" value="Voice" />
  					<Picker.Item label="Violin" value="Violin" />
  					<Picker.Item label="Trumpet" value="Trumpet" />
					</Picker>
  				</View>
  				
  				<View style= {styles.container}>
  				<Text style={{flex:4, fontSize: 17}}> for: </Text>
  					<Picker style={{flex:4, height:25}}
  					selectedValue={this.state.language}
  					onValueChange={(lang) => this.setState({language: lang})}>
  					<Picker.Item label="0 - 1 years" value="0-1 years" />
  					<Picker.Item label="1 - 3 years" value="1-3 years" />
  					<Picker.Item label="3 - 7 years" value="3-7 years" />
  					<Picker.Item label="7 + years" value="7+ years" />
					</Picker>
  				</View>

  				<Button onPress={() => console.log('hi')}>
  					Sign up!
  				</Button>
  				
  			</KeyboardAvoidingView>
  		
  	)
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection : 'row',
    width:300,
    height: 60,
    marginTop:5
  }
});
