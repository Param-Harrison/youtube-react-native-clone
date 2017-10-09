import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  View
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Splash from './splash'
import Play from './play'
import Holder from './holder'

export default class Index extends Component {
  constructor(props){
    super(props)

  }

  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'holder') {
      return (
        <Holder
        {...this.props}
        navigator={navigator} />
        );
    }
    if (routeId === 'play') {
      return (
        <Play
        {...this.props}
        navigator={navigator} />
        );
    }

    if (routeId === 'splash') {
      return (
        <Splash
        {...this.props}
        navigator={navigator} />
        );
    }

   }


  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar
     barStyle="light-content"
   />
     <Navigator
     style={{flex: 1}}
     initialRoute={{id: 'splash', name: 'splash'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}
