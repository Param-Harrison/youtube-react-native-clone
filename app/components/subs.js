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

var {height, width} = Dimensions.get('window');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Subs extends Component {
  constructor(props){
    super(props)

    console.log(this.props)
    this.state={
      fill:50,
      subs: ds.cloneWithRows(this.props.subs),
      vids: ds.cloneWithRows(this.props.vids),
    }
  }

  eachSub(x){

    if(!x.newSuff){
        return(<View style={{margin:5, alignItems:'center'}}>
          <Image source={{uri: x.image}} resizeMode="contain" style={{height:40, width:40, borderRadius:20}} />
          <Icon name="fiber-manual-record" color="rgba(0,0,0,0)" size={6} style={{margin:3}} />
          </View>)}else{
            return(<View style={{margin:5, alignItems:'center'}}>
          <Image source={{uri: x.image}} resizeMode="contain" style={{height:40, width:40, borderRadius:20}} />
          <Icon name="fiber-manual-record" color="#4285f4" size={6} style={{margin:3}} />
          </View>)
          }
  }
  eachVid(x){
    return(<TouchableOpacity style={{height:155, width:width, borderBottomWidth:1, borderColor:'#e6e6e6'}}>
            <View style={{flex:1, flexDirection:'row', alignItems:'center'}} >
            <Image source={{uri : x.avatar}} style={{height:30, width:30, marginLeft:10, borderRadius:15}} />
            <Text style={{margin:10, fontSize:12, color:'#444'}}>{x.youtuber}</Text>
            </View>
            <View style={{flex:2, flexDirection:'row', alignItems:'center'}}>
            <Image source = {{uri : "https://" + x.image}} style={{width:170, height:90, margin:10}} resizeMode='stretch' />
            <View style={{height:90, justifyContent:'space-between'}}>
            <Text style={{width:130, fontSize:12}}>{x.name}</Text>
            <Text style={{color:'#666', fontSize:11}}>{x.youtuber}</Text>
            <Text style={{color:'#666', fontSize:12}}>{x.views} views</Text>
            </View>
            </View>
            </TouchableOpacity>)
  }

  render() {
    return (
    <View style={{flex:1}}>
    <ListView
          dataSource={this.state.subs}
          horizontal = {true}
          renderRow={(rowData) => this.eachSub(rowData)}
          style={{flex:1, padding:10, borderBottomWidth:1, borderColor:'#e3e3e3'}}
        />
        <ListView
          dataSource={this.state.vids}
          renderRow={(rowData) => this.eachVid(rowData)}
          style={{flex:9}}
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

