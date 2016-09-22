import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContentOptionsBar from './ContentOptionsBar';
import VideoWebTask from './VideoWebTask';
import TextTask from './TextTask';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, Button } from 'react-native-material-design';

import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  WebView,
  Navigator
} from 'react-native';

class Notebook extends Component {  

    static route = {
    
    navigationBar : {
      title(params) {
        return params.name
      },
      tintColor : "white",
      backgroundColor : "#179fda"
    }
  }

  render() {
    return (
      <View style={{backgroundColor: "white", flex: 1}}>
        {/*<Header icon="keyboard-arrow-left">
          {name}
        </Header>*/}
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
             <Card style={{backgroundColor: '#f8f8f8'}}>
               <Card.Body>
                   <Text style={styles.textTitle}> 
                      Chords
                  </Text>
                  <Text style={styles.textNote}>
                    Today we worked on chords playing: practice on the diatonic chords in C,D,G major scale
                  </Text>
                </Card.Body>
                <Card.Actions position= "right">
                    <Icon style={{marginBottom:10, marginRight:10}} name="mode-edit" size={20} color="#9da6ad"/> 
                 </Card.Actions>
              </Card>

               <Card style={{backgroundColor: '#f8f8f8'}}>
               <Card.Body>
                   <Text style={styles.textTitle}> 
                      My favorit things
                  </Text>
                  <VideoWebTask url={'https://www.youtube.com/embed/IbnT2EiXI_E'}/>
                </Card.Body>
                <Card.Actions position= "right">
                    <Icon style={{marginBottom:10, marginRight:10}} name="mode-edit" size={20} color="#9da6ad"/> 
                 </Card.Actions>
              </Card>          
       </View>
       </ScrollView>
       <Footer/>
      </View>
      );
  }
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
    paddingBottom: 7
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
    color:'black',
    marginTop:-6,
    marginLeft:8,
    marginRight:10,
    marginBottom:-8,
    fontSize : 17
  },
  textNote: {
    margin: 8,
    marginBottom:-10,
    color : 'black'
  }
});

export default Notebook;