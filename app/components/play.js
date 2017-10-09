/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  LayoutAnimation
} from 'react-native';

var {height, width} = Dimensions.get('window');
import Video from "react-native-video"


import Nav from './widgets/nav';
export default class PlayVid extends Component {
 constructor(props, context, ...args) {
        super(props, context, ...args);
        this.state = {
          showVideoPlayer: true,
          video:{
            position:'absolute',
            right:-146,
            top:146,
            width:height,
            height:width,
            backgroundColor:'rgba(0,0,0,0.9)',
            transform: [{rotate: '90deg'}],
    
          }

        };
    }

    onClosePressed() {
        this.setState({showVideoPlayer: false});
    }

    componentDidMount(){
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      setTimeout(() => this.setVideo(), 10000)

    }

    setVideo(){
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      this.setState({
        video:{
            position:'absolute',
            right:5,
            top:height-90,
            width:150,
            height:80,
            backgroundColor:'rgba(0,0,0,0.9)',
            transform: [{rotate: '0deg'}],
    
          }
      })
    }

  render() {
    return (

      <Video
  repeat
  resizeMode='stretch'
  source={require('./kid.mp4')}
  style={this.state.video}
/>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:width,
    height:height,
    position:'absolute',
    top:0,
    left:0,
    backgroundColor:'rgba(0,0,0,0.1)'

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

