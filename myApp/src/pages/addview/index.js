import Taro, { Component, connectSocket } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '添加面试'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  constructor() {
    super(...arguments)
    const date = new Date()
    const years = []
    const months = []
    const days = []
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }
    this.state = {
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1],
      flag: false
    }
  }
  onChange = e => {
    const val = e.detail.value
    this.setState({
      year: this.state.years[val[0]],
      month: this.state.months[val[1]],
      day: this.state.days[val[2]],
      value: val
    })
  }
  render() {
    return (
      <View className='index'>
        <View className='title'>面试信息</View>
        <View>
          <View className='info'>
            <Text>公司名称</Text>
            <Input className='input' placeholder='请输入公司名称' />
          </View>
          <View className='info'>
            <Text>公司电话</Text>
            <Input className='input' placeholder='请输入面试联系人电话' />
          </View>
          <View className='info'>
            <Text>面试时间</Text>
            <View className='input' onClick={this.time.bind(this)}>{this.state.year}年{this.state.month}月{this.state.day}日</View>
          </View>
          <View className='info'>
            <Text>面试地址</Text>
            <Input onClick={this.seleaddress.bind(this)} className='input' placeholder='请输入面试地址' />
          </View>
        </View>
        <View className='title'>备注信息</View>
        <Textarea className='area' placeholder='备注信息（可选，100字以内）' style='border:1px solid #ccc;width:100%;min-height:80px;padding:0 30rpx;' autoHeight />
        {
          this.state.flag==='true' ? <View>
            <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>
              <PickerViewColumn>
                {this.state.years.map((item, i) => {
                  return (
                    <View key='i'>{item}年</View>
                  );
                })}
              </PickerViewColumn>
              <PickerViewColumn>
                {this.state.months.map((item, i) => {
                  return (
                    <View key='i'>{item}月</View>
                  )
                })}
              </PickerViewColumn>
              <PickerViewColumn>
                {this.state.days.map((item, i) => {
                  return (
                    <View key='i'>{item}日</View>
                  )
                })}
              </PickerViewColumn>
            </PickerView>
          </View> : ''
        }
        <Button>确认</Button>
      </View>
    )
  }
  time = () => {
    this.setState({
      flag: this.state.flag ? 'false' : 'true'
    })
  }
  seleaddress=()=>{
    Taro.navigateTo({
      url:'../address/index'
    })
  }
}
