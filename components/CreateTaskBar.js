import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

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
} from 'react-native';


export default class CreateTaskBar extends Component {
	constructor(props){
		super(props);
		this.state = {student : (this.props.selectedStudentId) ? this.props.selectedStudentId : ""}
	}

	render() {

		return (
			<View style={{position: 'absolute',left: 0,right: 0, bottom: 0, borderTopWidth: 3, borderTopColor: '#fed564', backgroundColor:'#f9f9f9', flex:1, flexDirection:'row', alignItems: 'center', height:42}}>
  				<TouchableOpacity activeOpacity={0.5} style={{flex :1, height:40, alignItems: 'center', justifyContent : 'center'}}>
  					<Icon name="people" size={25} color="#676767" /> 
  					<Text style={{marginTop:-9, fontSize:13.5}}>שיתוף</Text>
  				</TouchableOpacity>
  				<View style={{flex :1, height:40, alignItems: 'center', justifyContent : 'center'}}>
            		<Picker style={{height:50, width : 105}}
              		selectedValue={this.state.student}
              		onValueChange={(student) => this.setState({student: student})}>
              		{this.props.notebooks.map((notebooks) => <Picker.Item key={notebooks.id} label={notebooks.name} value={notebooks.id}/>)}
            		</Picker>
          		</View>
  				<View style={{flex :1, height:40, alignItems: 'center', justifyContent : 'center'}}>
  					<Text>
            		Create
            		</Text>
  				</View>
  			</View>

			)
	}

}