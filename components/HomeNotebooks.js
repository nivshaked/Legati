import React, { PropTypes } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from './Header';
import Footer from './Footer';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

const HomeNotebooks = ({notebooks, addNotebook, openNotebook}) => {
  	return(
		  <View style={{flex : 1}}>
        <Header icon="keyboard-arrow-left">
          רון
        </Header>
        <View style={{flex : 1, flexDirection : 'row', flexWrap : 'wrap'}}>
          {notebooks.map((notebook) => { 
            return ( 
                <TouchableOpacity style={styles.notebook} activeOpacity={0.5} key={notebook.id} onPress={() => {openNotebook(notebook.id, notebook.name)}}>
                <Image  source={require('../images/notebook.png')} style={{ width:107, height:78}}>
                  <View style={styles.backdropView}>
                    <Text style={styles.headline}>
                        {notebook.name}
                    </Text>
                  </View>
                </Image>
                </TouchableOpacity>
              );
          })}
          
          <TouchableOpacity style={styles.notebook} activeOpacity={0.5} onPress={() => { addNotebook() }} >
            <Image source={require('../images/notebook.png')} style={{ width:107, height:78}}>
              <View style={styles.backdropView}>
                <Text style={styles.headline}>
                     <Icon name="add" size={50} color="black"/>
                </Text>
              </View>
            </Image>
          </TouchableOpacity>
        </View>
        <Footer/>
      </View>
  	);
  
}



HomeNotebooks.propTypes = {
  notebooks : PropTypes.array,
  openNotebook : PropTypes.func,
  addNotebook : PropTypes.func.isRequired

};
const colors = ['#fed564', '#c7202c','#179fda'];
const styles = StyleSheet.create({
  backdropView: {
    flex:1,
    justifyContent : 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  headline: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black'
  },
  notebook : {
    marginTop : 15, 
    marginLeft : 10,
    width:107,
    height:78,
    borderColor : '#179fda',
    borderWidth : 0.7
  }
});

export default HomeNotebooks;