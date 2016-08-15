import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';

const Button = ({onPress, children}) => {
	return (
		<TouchableNativeFeedback onPress={onPress} >
  			<View style={styles.container}>
  				<Text style={{fontSize: 18, color : 'white'}}>
  					{children}
  				</Text>
  			</View>
  		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
  container: {
  borderRadius : 13,
  backgroundColor: '#179fda',
  width : 150,
  height:40,
  alignItems: 'center',
  justifyContent : 'center'
  }

});

export default Button;