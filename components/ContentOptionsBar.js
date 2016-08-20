import React, { PropTypes } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
  View,
  TouchableOpacity
} from 'react-native';

const ContentOptionsBar = ({shared}) => {
  return ( 
      <View style={{height:30, flex:0, flexDirection:'row',justifyContent:'center', marginBottom: 5}}>
          <View style={{width:200, height:30, flexDirection : 'row', justifyContent:'center'}}>
            <TouchableOpacity activeOpacity={0.5} style={{flex :1,  height:30, alignItems: 'center', justifyContent : 'center'}}>
              <Icon name="people" size={20} color={shared ? "#179fda" : "#aab8c2"} /> 
                {/*<Text style={{marginTop:-9, fontSize:13.5}}>Share</Text>*/}
            </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} style={{flex :1, height:30,  alignItems: 'center', justifyContent : 'center'}}>
            <Icon name="mode-edit" size={20} color="#aab8c2" /> 
              {/* <Text style={{marginTop:-7, fontSize:13.5}}>Edit</Text>*/}
            </TouchableOpacity>
          </View>
      </View>
    )

}

ContentOptionsBar.PropTypes = {
  shared : PropTypes.bool.isRequired 
};
export default ContentOptionsBar;