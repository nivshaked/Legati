import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Picker,
  TouchableNativeFeedback,
  View
} from 'react-native';
const Button = ({onPress, children}) => {
	return (
			<TouchableNativeFeedback onPress={onPress} >
  				<View style={{borderRadius : 13, backgroundColor: '#179fda', marginBottom: 20, width : 150, height:40, alignItems: 'center', justifyContent : 'center'}}>
  					<Text style={{fontSize: 20, color : 'white'}}>
  						{children}
  					</Text>
  				</View>
  			</TouchableNativeFeedback>
		);
};

export default Button;