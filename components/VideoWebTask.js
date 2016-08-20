import React, { PropTypes } from 'react';

import { 
  View,
  WebView
} from 'react-native';

const VideoWebTask = ({url}) => {
  return ( 
      <View style={{flex : 0, flexDirection:'row', justifyContent:'center', margin:16, marginBottom : 8}}>
        <View>
          <WebView style={{height : 180, width:330, borderWidth :1.3, backgroundColor: '#f8f8f8'}} source={{html : '<iframe width="320" height="180" src="' + url + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'}}/>
        </View>
      </View>
    )

};

VideoWebTask.PropTypes = {
  url : PropTypes.string.isRequired 
};

export default VideoWebTask;