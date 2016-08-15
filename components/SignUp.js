import React, { Component } from 'react';
import Button from './Button.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignUpStudent from './SignUpStudent';

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
  		
  			<ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style= {{flexDirection:'row', position: 'absolute'}}>
          <View style={{height:25, backgroundColor:"#179fda", flex:1, alignItems: 'center', justifyContent : 'center'}}>
            <Text style={{color:'white',fontSize:15}}> something went wrong </Text>
          </View>
        </View>
  	   			<Image source={require('../images/legatiLogo.png')} style= {{width:210, height:120, marginTop: 30}}/>
  				<TextInput style={styles.textInput} placeholder="First Name" />
          <TextInput style={styles.textInput} placeholder="Last Name" />
  				<TextInput secureTextEntry={true} style={styles.textInput} placeholder="Password" />
  				<TextInput secureTextEntry={true} style={styles.textInput} placeholder="Verify Password" />
  				<TextInput style={styles.textInput} keyboardType= 'email-address' placeholder="Email address" />
  				<View style= {styles.userType}>
  					<Text style={{flex:1, fontSize: 17}}> I am a: </Text>
  					<Picker style={{flex:4, height:25}}
  					selectedValue={this.state.language}
  					onValueChange={(lang) => this.setState({language: lang})}>
  					<Picker.Item label="Student" value="Student" />
  					<Picker.Item label="Teacher" value="Teacher" />
  					<Picker.Item label="Parent" value="Parent" />
					</Picker>
  				</View>
  				<Button onPress={() => this.props.navigator.push({ name: 'SignUpStudent', SignUpStudent})}>
  					Continue
  				</Button>
          <View style={{marginTop:7}}>
  				  <Text style={{textDecorationLine:'underline', color:'#003b59'}}> Already a member? </Text>
          </View>
  			</ScrollView>
  		
  	)
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width:300
  },
  userType: {
    flex:1,
    flexDirection : 'row',
    width:300,
    height: 60,
    marginTop:5
  }
});