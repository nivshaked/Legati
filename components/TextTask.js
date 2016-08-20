import React, { PropTypes } from 'react';

import { 
  View,
  Text,
  StyleSheet
} from 'react-native';

const TextTask = ({text, title}) => {
  return ( 
      <View style={styles.textContainer}>
          
          {title && <Text style={styles.textTitle}> 
                 {title}
                </Text>}
          {text && <Text style={styles.textNote}>
               {text}  
              </Text>}
          
      </View>
    )

};

const styles = StyleSheet.create({
  textContainer: {
    minHeight: 38,
    margin:16,
    marginBottom : 8,
    borderWidth :1.3,
    borderColor : '#fed564',
    backgroundColor: '#f9f9f9'
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

TextTask.PropTypes = {
  text : PropTypes.string,
  title : PropTypes.string 
};

export default TextTask;