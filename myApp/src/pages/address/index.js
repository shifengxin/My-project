import Taro, { Component, connectSocket } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '选择面试地址'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  
  render() {
    return (
      <View className='index'>
        选择面试地址
      </View>
    )
  }
}
