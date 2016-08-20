import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Icon from 'react-native-vector-icons/MaterialIcons';


import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  WebView,
  Navigator
} from 'react-native';

const Notebook = ({name}) => { 
    return (
      <View style={{backgroundColor: "white", flex: 1}}>
        <Header icon="keyboard-arrow-left">
          {name}
        </Header>
       {/*lesson view*/}
       <ScrollView>
       <View style={styles.lesson}>
       		{/*date and menu view*/}
       		<View style={styles.dateMenuContainer}>
       			<Text style={styles.date}>
       			25/5/2015
       			</Text>
       			 <Icon name="more-vert" size={23} color="black"/>
       		</View>
       		{/*individual tasks text view*/}
       		<View style={styles.taskContainer}>
       			<View style={styles.textContainer}>
         			<Text style={styles.textNote}>
         				practice scales and more please asdasd  
         			8
         			</Text>
       			</View>
            {/*share and edit bar*/}
            <View style={{ flex:1, flexDirection:'row', alignItems: 'center', height:30, marginBottom: 5}}>
              <View style={{flex :1, height:40, alignItems: 'center', justifyContent : 'center'}}>
                <Icon name="people" size={25} color="#676767" /> 
                <Text style={{marginTop:-9, fontSize:13.5}}>share</Text>
              </View>
              <View style={{flex :1, height:40,  alignItems: 'center', justifyContent : 'center'}}>
                <Icon name="mode-edit" size={27} color="#676767" /> 
              </View>
              
            </View>

       		</View>

          {/*individual task video view*/}
          <View style={styles.taskContainer}>
            <WebView style={{height : 200, width:330, margin:15, borderWidth :1.3, backgroundColor: '#f8f8f8'}}source={{html : '<iframe width="320" height="180" src="https://www.youtube.com/embed/KVZ-P-ZI6W4?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'}}/>
          </View>

       		<View style= {styles.taskContainer}>
       			<View style={styles.textContainer}>
              <Text style={styles.textTitle}> 
                אקורדים
              </Text>
       			  <Text style={styles.textNote}>
       				 היום עבדנו על נגינת אקורדים- אקורדים מינורים ומז'ורים.
               תחזור על נגינת האקורדים הדיאטונים בסולמות דו,
               סול ורה מז'ור	
       		   	</Text>
       			</View>
       		</View>
       		<View style={styles.taskContainer}>
       			<View style={styles.textContainer}>
       			<Text style={styles.textNote}>
       				practice scales and more please asdasd  
       			</Text>
       			</View>
       		</View>
       </View>
       </ScrollView>
       <Footer/>
      </View>
      );
  
}

const styles = StyleSheet.create({
  lesson: {
    borderBottomWidth: 1.5,
    borderColor:'black'
  },
  dateMenuContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 0
  },
  date:{
    width:110,
    fontSize:17,
    color: 'black',
    marginTop: 5
  },
  taskContainer: {
    borderBottomWidth : 0.7,
    borderColor : '#b2b2b2'
  },
  textContainer: {
    margin:16,
    marginBottom : 8,
    borderWidth :1.3,
    borderColor : '#fed564',
    backgroundColor: '#f8f8f8'
  },
  textTitle: {
    fontWeight:'bold',
    marginTop:5,
    color:'black',
    marginLeft:10,
    marginRight:10,
    marginBottom:-8,
    fontSize : 17
  },
  textNote: {
    margin: 10,
    color : 'black'
  }
});

export default Notebook;