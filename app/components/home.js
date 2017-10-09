/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ListView,
  View
} from 'react-native';

import Play from './play'

var {height, width} = Dimensions.get('window');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {
  constructor(props){
    super(props)

    console.log(this.props)
    this.state={
      fill:50,
      noVideo:true,
      dataSource: ds.cloneWithRows(this.props.vid),
    }
  }

  eachVid(x){
    return(<TouchableOpacity onPress={this.props.press} style={{height:295, width:width, borderBottomWidth:1, borderColor:'#e6e6e6'}}>
      <Image source={{uri : 'https://' + x.image}} resizeMode="stretch" style={{width:350, alignSelf:'center', height:200, margin:15, marginBottom:0}} />
      <View style={{padding:15, height:80, alignItems:'center', width:350, flexDirection:'row'}}>
      <Image source={{uri : x.avatar}} resizeMode="contain" style={{height:40,width:40, borderRadius:20}} />
      <View style={{margin:2, marginLeft:10}}>
      <Text style={{color:'#333', margin:2, fontSize:13, width:260}}>
      {x.name}
      </Text>
      <Text style={{color:'#666', margin:2, marginTop:0, fontSize:12}}>
      {x.youtuber} <Icon name="fiber-manual-record" color="#777" size={6} style={{margin:3}} /> {x.views} views <Icon name="fiber-manual-record" color="#777" size={6} style={{margin:5}} /> {x.time} 
      </Text>
      </View>
      </View>
      </TouchableOpacity>)
  }

 

  render() {
    return (
    <View style={{flex:1}}>
      <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.eachVid(rowData)}
          style={{marginTop:5}}
        />
 
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

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

