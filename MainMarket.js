import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export default class MainMarket extends Component {

  constructor(props){
    super(props);
    console.log('构造方法');
  }

  componentWillMount(){
    console.log('挂载前调用');
  }

  render(){
    console.log('这个方法是必须的');
    return (
      <View>
        <Text>
          理论上应该显示一个很牛逼的列表
        </Text>

      </View>
    );
  };

  componentDidMount(){
    console.log('挂载后调用');
  }

};
// module.exports = MainMarket;
