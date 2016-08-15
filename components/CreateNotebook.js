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


export default class CreateNotebook extends Component { 

	constructor(props){
		super(props)
		this.state= {language:""};
	}
	addNotebook() {
		console.log(this);
		console.log(this.props);
		this.props.addNotebook(this.refs.nameInput._lastNativeText);
	}
  render() {
  	return(
  		<View>
  			<Header icon="keyboard-arrow-left">
  				Create notebook
  			</Header>
  			<KeyboardAvoidingView style={{alignItems: 'center', marginTop:10}}>
  				
  				<View style= {styles.container}>
  					<TextInput ref="nameInput" style={styles.textInput} placeholder="Notebook name" />
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

  				<TouchableNativeFeedback onPress={this.addNotebook.bind(this)}>
  					<View style={{borderRadius : 10, borderWidth:0, borderColor: '#003b59', backgroundColor: '#179fda', width : 75, height:30, alignItems: 'center',justifyContent : 'center'}}>
  						<Text style={{fontSize: 15, color : 'white'}}>
  							Add
  						</Text>
 	 				</View>
  				</TouchableNativeFeedback>
  				
  				<View style={{borderBottomWidth: 0.7,borderBottomColor: '#a8a8a8', width: 300, marginTop: 25}}>
  					<View style={{alignSelf: 'flex-start'}}>
  						<Text style={{color:'black'}}> Notebooks added</Text>
  					</View>
  				</View>

  				<View style= {{flex:1, flexDirection:'row', alignItems: 'center',height:40, width:300}}>

  				{this.props.notebooks.map((notebook) => {
  					return(
  						<View key={notebook.id} style={{flex :1, height:40,  alignItems: 'center', justifyContent : 'center'}}>
   				 			<Text style={{color:"black"}}> {notebook.name} </Text>
   				 		</View>
  						);
  				})}

   				</View>	
   				 
   		
  				

  				<View style={{marginTop:200}}>
  					<Button onPress={() => console.log('hi')}>
  						Create
  					</Button>
  				</View>
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