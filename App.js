/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';
 import TabNavigator from 'react-native-tab-navigator';
 import Icon from 'react-native-vector-icons/FontAwesome'
 import {Dimensions} from 'react-native'

 import MarketList from './app/MarketList'
 import Mine from './app/Mine'


 const deviceW = Dimensions.get('window').width

 const basePx = 375
 const iconSize = 25 //ICON image size
 const tabTitles = [
   'MarketList','Mine'
 ];


 function px2dp(px) {
   return px *  deviceW / basePx
 }

 export default class RootNavigator extends Component {
   state= {
     selectedTab: tabTitles[0]
   };

   render() {
     return (
       <TabNavigator style={styles.container}>

         <TabNavigator.Item
           selected={this.state.selectedTab === tabTitles[0]}
           title={tabTitles[0]}
           selectedTitleStyle={styles.naviagtorTitleSelected}
           titleStyle={styles.navigatorTitle}
           renderIcon={() => <Icon name="user" size={px2dp(iconSize)} color="#666"/>}
           renderSelectedIcon={() => <Icon name="user" size={px2dp(iconSize)} color="#3496f0"/>}
           onPress={() => this.setState({selectedTab: tabTitles[0]})}>
           <MarketList/>
         </TabNavigator.Item>
         <TabNavigator.Item
           selected={this.state.selectedTab === tabTitles[1]}
           title={tabTitles[1]}
           selectedTitleStyle={styles.naviagtorTitleSelected}
           titleStyle={styles.navigatorTitle}
           renderIcon={() => <Icon name="user" size={px2dp(iconSize)} color="#666"/>}
           renderSelectedIcon={() => <Icon name="user" size={px2dp(iconSize)} color="#3496f0"/>}
           onPress={() => this.setState({selectedTab: tabTitles[1]})}>
           <Mine />
         </TabNavigator.Item>
       </TabNavigator>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
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
   navigatorTitle:{
    fontSize: 14,
   },
   naviagtorTitleSelected:{
     fontSize: 14,
     color: "#3496f0"
   }
 });

 // AppRegistry.registerComponent('TabDemo', () => TabDemo);
// export default RootNavigator;
