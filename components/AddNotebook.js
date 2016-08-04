import React, { Component } from 'react';
import Button from './Button.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from './Header';


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


export default class AddNotebook extends Component { 

	constructor(){
		super()
		this.state= {language:""};
	}

  render() {
  	return(
  		<View>
  			<Header>
  				Create notebook
  			</Header>
  			<KeyboardAvoidingView style={{ alignItems: 'center'}}>
  				
  				<View style= {styles.container}>
  				<TextInput style={styles.textInput} placeholder="Notebook name" />
  				</View>

  				<View style= {styles.container}>
  					<Picker style={{flex:1, height:25}}
  					selectedValue={this.state.language}
  					onValueChange={(lang) => this.setState({language: lang})}>
  					<Picker.Item label="Instrument" value="Instrument" />
  					<Picker.Item label="1 - 3 years" value="1-3 years" />
  					<Picker.Item label="3 - 7 years" value="3-7 years" />
  					<Picker.Item label="7 + years" value="7+ years" />
					</Picker>
				
  					<Picker style={{flex:1, height:25}}
  					selectedValue={this.state.language}
  					onValueChange={(lang) => this.setState({language: lang})}>
  					<Picker.Item label="years learning" value="years learning" />
  					<Picker.Item label="1 - 3 years" value="1-3 years" />
  					<Picker.Item label="3 - 7 years" value="3-7 years" />
  					<Picker.Item label="7 + years" value="7+ years" />
					</Picker>
  				</View>
  		<TouchableNativeFeedback>
  			<View style={{borderRadius : 10, borderWidth:5, borderColor: '#003b59', backgroundColor: '#179fda', width : 75, height:30, alignItems: 'center',justifyContent : 'center'}}>
  				<Text style={{fontSize: 15, color : 'white'}}>
  					Add
  				</Text>
  			</View>
  		</TouchableNativeFeedback>
  				<Button onPress={() => console.log('hi')}>
  					Create
  				</Button>
  				
  			</KeyboardAvoidingView>
  		</View>
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
  },
  textInput: {
    height: 50,
    width:300
  }
});