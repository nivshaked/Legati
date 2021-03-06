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
  View,
  InteractionManager
} from 'react-native';

import { 
  NavigationStyles
} from '@exponent/ex-navigation';

export default class CreateNotebook extends Component { 

  static route = {

    navigationBar : {
      title:'Create Notebooks',
      tintColor : "white",
      backgroundColor : "#179fda"
    }
  }
  
	constructor(props){
		super(props)
		this.state= {language:"", renderPlaceholderOnly: true};
	}
	


  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({renderPlaceholderOnly: false});
    });
  }

  _renderPlaceholderView() {
    return (
       <View>
       <Text>
       Loading...
       </Text>
      </View>
    );
  }


  
  addNotebook() {
    this.props.addNotebook({name : this.refs.nameInput._lastNativeText});
    this.refs.nameInput.setNativeProps({text:""});
  }

  

  render() {

    /*if (this.state.renderPlaceholderOnly) {
      return this._renderPlaceholderView();
    }*/

  	return(
  		<View>

  			{/*<Header icon="keyboard-arrow-left">
  				Create Notebook
  			</Header>*/}
  			<KeyboardAvoidingView style={{alignItems: 'center', marginTop:10}}>
  				
  				<View style= {styles.container}>
  					<TextInput ref="nameInput" style={styles.textInput}  placeholder="Notebook name" />
  				</View>
          <View style= {{flex:1, flexDirection : 'row', width:300, height: 60, marginTop:-15}}>
            <TextInput  style={{flex:2.5, height:40}}  placeholder="Share with (Type an email address)" />
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
  				
  				<View style={{borderBottomWidth: 0.7,borderBottomColor: '#a8a8a8', width: 300, marginTop: 40}}>
  					<View style={{alignSelf: 'flex-start'}}>
  						<Text style={{color:'black'}}> Notebooks added</Text>
  					</View>
  				</View>

  				<View style= {{flex:1, flexDirection:'row', flexWrap : 'wrap', alignItems: 'center',height:40, width:300}}>

  				{this.props.notebooks.map((notebook) => {
  					return(
  						<View key={notebook.id} style={{flex :1, height:40,  alignItems: 'center', justifyContent : 'center', width:60}}>
                <View style={{backgroundColor:'#d1d1d1', height:21, borderColor:'black', borderWidth:0.5, borderRadius:5, width:60}}>
   				 			   <Text style={{color:"black"}}>  x  {notebook.name}  </Text>
                </View>
   				 		</View>
  						);
  				})}

   				</View>	
   				 
   		
  				

  				<View style={{marginTop:150}}>
  					<Button onPress={() => { this.props.createNotebook()}}>
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
    marginTop:-7
  },
  textInput: {
    height: 40,
    width:300
  }
});