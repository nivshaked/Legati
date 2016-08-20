import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from './Header';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  View
} from 'react-native';


export default class AddText extends Component { 
  constructor(){
		super()
		this.state= {language:"asd"};
	}
  render() {
  	return(
  		<View style={{flex:1}}>
  			<Header icon="keyboard-arrow-right">
  				רון
  			</Header>

  			<View style={{borderWidth:3, borderColor: '#fed564', flex:1, alignItems : 'center'}}>
  				<View style={{marginTop: 10, marginLeft: 10, marginRight:10, flex:1}}>
  					<TextInput style={{fontSize: 20,fontWeight:'bold', height: 50, width:315}} placeholder="כותרת" underlineColorAndroid= 'transparent' />
  				</View>
  				<View style={{marginLeft: 10, marginRight:10, flex:13}}>
  					<TextInput style={{fontSize: 18, width:315, flex:1, textAlignVertical : 'top'}}  multiline={true} placeholder="תוכן" underlineColorAndroid= 'transparent' />
  				</View>
  			</View>

  			<View style={{position: 'absolute',left: 0,right: 0, bottom: 0, borderTopWidth: 3, borderTopColor: '#fed564', backgroundColor:'#f9f9f9', flex:1, flexDirection:'row', alignItems: 'center', height:42}}>
  				<TouchableOpacity activeOpacity={0.5} style={{flex :1, height:40, alignItems: 'center', justifyContent : 'center'}}>
  					<Icon name="people" size={25} color="#676767" /> 
  					<Text style={{marginTop:-9, fontSize:13.5}}>שיתוף</Text>
  				</TouchableOpacity>
  				<View style={{flex :1, height:40, alignItems: 'center', justifyContent : 'center'}}>
            <Picker style={{height:50, width : 105}}
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
              <Picker.Item label="Instrument" value="Instrument"/>
              <Picker.Item label="1 - 3 years" value="1-3 years"/>
              <Picker.Item label="3 - 7 years" value="3-7 years"/>
              <Picker.Item label="7 + years" value="7+ years"/>
          </Picker>
          </View>
  				<View style={{flex :1, height:40, alignItems: 'center', justifyContent : 'center'}}>
  					<Picker style={{height:50, width : 105}}
  					selectedValue={this.state.language}
  					onValueChange={(lang) => this.setState({language: lang})}>
  						<Picker.Item label="Instrument" value="Instrument"/>
  						<Picker.Item label="1 - 3 years" value="1-3 years"/>
  						<Picker.Item label="3 - 7 years" value="3-7 years"/>
  						<Picker.Item label="7 + years" value="7+ years"/>
					</Picker>
  				</View>
  			</View>
  		</View>
  	)
  }
}
