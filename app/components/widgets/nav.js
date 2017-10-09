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
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconz from 'react-native-vector-icons/MaterialIcons';


export default class Subs extends Component {
  render() {
    if(!this.props.dark){
        return (
          <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Icon name="logo-youtube" style={{margin:10,}} size={30} color="#fff" />
            <Text style={{color:'#fff', margin:8, fontWeight:'500', fontSize:17}}>{this.props.name}</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity>
                    <Iconz name="search" style={{margin:5}} size={20} color="#fff" />
                    </TouchableOpacity><TouchableOpacity>
            <Iconz name="more-vert" style={{margin:5}} size={20} color="#fff" />
            </TouchableOpacity>
            </View>
          </View>)}else{
             return (
          <View style={styles.containerD}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Icon name="logo-youtube" style={{margin:10,}} size={30} color="#fff" />
            <Text style={{color:'#fff', margin:8, fontWeight:'500', fontSize:17}}>{this.props.name}</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity>
                    <Iconz name="search" style={{margin:5}} size={20} color="#fff" />
                    </TouchableOpacity><TouchableOpacity>
            <Iconz name="more-vert" style={{margin:5}} size={20} color="#fff" />
            </TouchableOpacity>
            </View>
          </View>)}
          }
  
  }


const styles = StyleSheet.create({
  container: {
   height:60,
   paddingTop:13,
   flexDirection:'row',
   backgroundColor:'#dd5057',
   justifyContent:'space-between',
   borderBottomWidth:1,
   borderColor:'#e2777d'

  },
  containerD: {
   height:60,
   paddingTop:13,
   flexDirection:'row',
   backgroundColor:'#333',
   justifyContent:'space-between',
   borderBottomWidth:1,
   borderColor:'#444'

  },

  
});

