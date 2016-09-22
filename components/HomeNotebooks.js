import React, { Component, PropTypes } from 'react';
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
  Dimensions,
  View,
  InteractionManager
} from 'react-native';
var {height, width} = Dimensions.get('window');
notebookwidth = (width-40)/3 ;

class HomeNotebooks extends Component {
    constructor(props) { 
        super(props);
        this.state = {headerMode : 'header', selected : false, renderPlaceholderOnly: true };
    }

    componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({renderPlaceholderOnly: false});
    });
    }

    notebookOnLongPress(notebook) { 
      (this.state.selected === notebook.id) ?
      this.setState({headerMode : 'header' , selected : false}) :
      this.setState({headerMode : 'edit' , selected : notebook.id})

    }
/*    this function is for ease of testing only
*/
    notebookOnLongPressTest(notebook){
        this.props.deleteNotebook(notebook.id)
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

    static route = {
    
    navigationBar : {
      title:'Home',
      tintColor : "white",
      backgroundColor : "#179fda"
      }
    }
  	render() { 

      if (this.state.renderPlaceholderOnly) {
      return this._renderPlaceholderView();
      }

      return (
		  <View style={{flex : 1}}>
        {/*<Header methods={{deleteNotebook : this.props.deleteNotebook, changeHeader : () => {this.setState({headerMode : 'header'})} }} id={this.state.selected} mode={this.state.headerMode} icon="menu">
          Home
        </Header>*/}
        <View style={{flex : 1, flexDirection : 'row', flexWrap : 'wrap'}}>
          {this.props.notebooks.map((notebook) => { 
            return ( 
                <TouchableOpacity style={styles.notebook} activeOpacity={0.5} key={notebook.id} onLongPress={() => {this.notebookOnLongPressTest(notebook)}}
                   onPress={() => {this.props.openNotebook(notebook.id, notebook.name)}}>
                <Image  source={require('../images/notebook.png')} style={{width:notebookwidth-4, height:78}}>
                <Icon style={{position:'absolute',right:3.5, bottom:1, opacity : (this.state.selected === notebook.id) ? 1 : 0 }} name="check-circle" size={23} color="#4bd45b"/>
                  <View style={styles.backdropView}>
                    <Text style={styles.headline}>
                        {notebook.name}
                    </Text>
                  </View>
                </Image>
                </TouchableOpacity>
              );
          })}
          
          <TouchableOpacity style={styles.notebook} activeOpacity={0.5} onPress={() => { this.props.addNotebook() }} >
            <Image source={require('../images/notebook.png')} style={{width:notebookwidth-4, height:78}}>
              <View style={styles.backdropView}>
                <Text style={styles.headline}>
                     <Icon name="add" size={50} color="black"/>
                </Text>
              </View>
            </Image>
          </TouchableOpacity>
          </View>
            <Footer navigate={this.props.navigate}/>
        </View>
  	);
  }
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
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black'
  },
  notebook : {
    marginTop : 15, 
    marginLeft : 10,
    width: notebookwidth,
    height:81,
    borderColor : '#179fda',
    borderWidth : 1.7
  }
});

export default HomeNotebooks;