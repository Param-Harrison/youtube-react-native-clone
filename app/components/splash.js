/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

export default class Splash extends Component {
   componentDidMount(){
      setTimeout(() => this.props.navigator.push({id:'holder'}), 1000)

    }

  render() {
    return (
      <View style={styles.container}>
       <Image source={require('../images/splash.png')} resizeMode="contain" style={{height:200, width:200}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dd5057',
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

