//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    msg:'内容，学习git'
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
