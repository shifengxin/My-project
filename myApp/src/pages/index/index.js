import Taro, { Component, connectSocket } from '@tarojs/taro'
import { View, Text, Map ,Image} from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '一面而就'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Map
          id="map"
          longitude="116.300278"
          latitude="40.040848"
          scale="14"
          controls="{{controls}}"
          bindcontroltap="controltap"
          markers="{{markers}}"
          bindmarkertap="markertap"
          polyline="{{polyline}}"
          bindregionchange="regionchange"
          show-location
          style="width: 100%; height:450px;"
        ></Map>
        <View onClick={this.clickadd.bind(this)} className='text'>一面而就</View>
        <Image className='img img1' src='../../images/location.png'></Image>
        <Image onClick={this.clickPer.bind(this)} className='img img2' src='../../images/my.png'></Image>
      </View>
    )
  }
  clickadd=()=>{
    Taro.navigateTo({
      url:'../addview/index'
    })
  }
  clickPer=()=>{
    Taro.navigateTo({
      url:'../person/index'
    })
  }
  regionchange(e){
    console.log(e.type)
  }
  markertap(e){
    console.log(e.markerId)
  }
  controltap(e){
    console.log(e.controltId)
  }
}
