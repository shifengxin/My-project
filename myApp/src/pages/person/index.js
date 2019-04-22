import Taro, { Component, connectSocket } from '@tarojs/taro'
import { View, Text, Icon, Image } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View className='kong'>
          <Image className='perimg' src='../../images/my.png'></Image>
        </View>
        <View>
          <View className='box' onClick={this.lookviewlist.bind(this)}>
            <Icon className='tu' type='waiting' color='blue'></Icon>
            <Text className='con'>我的面试</Text><Text className='tu'>></Text>
          </View>
          <View className='box'>
            <Icon className='tu' type='waiting' color='blue'></Icon>
            <Text className='con'>客服中心</Text><Text className='tu'>></Text>
          </View>
        </View>
      </View>
    )
  }
  lookviewlist=()=>{
    Taro.navigateTo({
      url:'../viewlist/index'
    })
  }
}
