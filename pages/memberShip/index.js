// pages/memberShip/index.js
import * as echarts from '../../ec-canvas/echarts';
const utils = require('../../utils/util');
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);

  let xAxisDataTime = utils.getLast(new Date());
  let xAxisData = [];
  var DataValue;
  for(var i=0;i<xAxisDataTime.length;i++){
    DataValue = {
      value: xAxisDataTime[i],
      textStyle: {
        color: 'rgba(154, 154, 154, 1)',
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
        lineStyle: {
          color: 'rgba(233, 239, 243, 1)',
        },
      },
      data: xAxisData
    },
    yAxis: {
      type: 'value',
      scale : false,
      max : 200,
      min : 0,
      splitNumber : 5,
      nameGap : 15,
    },
    series: [{
        data: [50, 90, 118, 135, 145, 160, 152],  
        type: 'line',
        symbolSize: 10,
        label: {
          show: true,
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: 'rgba(255, 185, 117, 1)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(242, 245, 249, 0)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        },
        itemStyle : {
          width:5,
          color:"rgba(255, 148, 44, 1)"   //折线颜色
        },
        lineStyle:{
          width:3,          //折线宽度
          color:"rgba(255, 148, 44, 1)"   //折线颜色
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
    todayActive: 'active',
    toweekActive: '',
    tomonthActive: '',
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