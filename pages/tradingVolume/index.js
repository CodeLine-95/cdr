// pages/tradingVolume/index.js
import * as echarts from '../../ec-canvas/echarts'; 
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  let xAxisDataTime = ['日','周','月','年'];
  let xAxisData = [];
  var DataValue;
  for(var i=0;i<xAxisDataTime.length;i++){
    DataValue = {
      value: xAxisDataTime[i],
      textStyle: {
        color: 'rgba(255, 255, 255, 1)',
        fontWeight: 'bold'
      }
    }
    xAxisData.push(DataValue);
  }
  var option = {  
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle:{
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(255, 255, 255, 0)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(255, 255, 255, 1)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      },
      // data: xAxisData
    },
    yAxis: {
      type: 'value',
      scale : false,
      min: 0,
      max: 3,
      interval : 1,
      nameGap : 15,
      axisLabel: {
        formatter: '{value} k'
      },
      nameTextStyle: {
        lineStyle:{
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(255, 255, 255, 0)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(255, 255, 255, 1)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      },
      splitLine: {
        lineStyle:{
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(255, 255, 255, 0)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(255, 255, 255, 1)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      }
    },
    series: [{
        data: [1.2, 2.5, 1, 1.9],  
        type: 'line',
        symbolSize: 10,
        // label: {
        //   show: true,
        // },
        smooth: 0.6,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(255, 255, 255, 1)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(255, 255, 255, 0)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        },
        itemStyle : {
          width:5,
          color:"rgba(255, 255, 255, 1)"   //折线颜色
        },
        lineStyle:{
          width:3,          //折线宽度
          color:"rgba(255, 255, 255, 1)"   //折线颜色
        },
    }],
    animation: false,
  };
  chart.setOption(option);
  return chart;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    },
    todayActive: 'tab-active',
    weekActive: '',
    monthActive: '',
    yearActive: '',
    stores: ['厂家一', '厂家二', '厂家三', '厂家四'],
    index: 0,
    todayWidth: 40,
    weekWidth: 20,
    monthWidth: 20,
    yearWidth: 20,
  },

  storeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  tabValue: function(e){
    let _this = this;
    let type = e.currentTarget.dataset.type;
    if(type == 'today'){
      _this.setData({ todayWidth: 40,weekWidth: 20,monthWidth: 20, yearWidth: 20 })
      _this.setData({ todayActive: 'tab-active',weekActive: '',monthActive: '', yearActive: '' })
    }
    if(type == 'week'){
      _this.setData({ todayWidth: 20,weekWidth: 40,monthWidth: 20, yearWidth: 20 })
      _this.setData({ todayActive: '',weekActive: 'tab-active',monthActive: '', yearActive: '' })
    }
    if(type == 'month'){
      _this.setData({ todayWidth: 20,weekWidth: 20,monthWidth: 40, yearWidth: 20 })
      _this.setData({ todayActive: '',weekActive: '',monthActive: 'tab-active', yearActive: '' })
    }
    if(type == 'year'){
      _this.setData({ todayWidth: 20,weekWidth: 20,monthWidth: 20, yearWidth: 40 })
      _this.setData({ todayActive: '',weekActive: '',monthActive: '', yearActive: 'tab-active' })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})