import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class MarketList extends Component {
   render() {
     return (
       <View style={styles.container}>
         <Text>
           MarketList-雪花神剑
         </Text>
       </View>
     )
   }
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
