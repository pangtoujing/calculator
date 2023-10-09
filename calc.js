// pages/calc/calc.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result:'0',
    operation:'+',
    isClear:false,
    operand:null,
    items:[
    {
     id:"clear",
     value:"c",
     type:"function"
    },
    {
      id:"divide",
      value:"/",
      type:"operation"
    },
    {
      id:"multiply",
    value:"*",
    type:"operation"
    },
    {
      id:"backspace",
      value:"<-",
      type:"functon"
    },
    {
      id:"seven",
      value:"7",
      type:"number"
    },
    {
      id:"eight",
      value:"8",
      type:"number"
    },
    {
      id:"nine",
      value:"9",
      type:"number"
    },
    {
      id:"subtract",
      value:"-",
      type:"operation"
    },
    {
      id:"four",
      value:"4",
      type:"number"
    },
    {
      id:"five",
      value:"5",
      type:"number"
    },
    {
      id:"six",
      value:"6",
      type:"number"
    },
    {
      id:"add",
      value:"+",
      type:"operation"
    },
    {
      id:"one",
      value:"1",
      type:"number"
    },
    {
      id:"two",
      value:"2",
      type:"number"
    },
    {
      id:"three",
      value:"3",
      type:"number"
    },
    {
      id:"history",
      value:"H",
      type:"function"
    },
    {
      id:"percent",
      value:"%",
      type:"number"
    },
    {
      id:"zero",
      value:"0",
      type:"number"
    },
    {
      id:"point",
      value:".",
      type:"number"
    },
    {
      id:"equal",
      value:"=",
      type:"operation"
    }
  ]
},
tapnumber:function(e){
  var value =e.target.dataset.value;
  if(this.data.result==='0' || this.data.isClear){
    this.setData({
      result:value
    });
    this.data.isClear= false;
  }else 
  {
    this.setData(
      {
        result:this.data.result + value
      }
    );
  }
},

tapoperation:function(e){
  var operation = this.data.operation;
  this.setData({ operation:e.target.dataset.value});
  this.data.isClear = true ;

  var value =Number(this.data.result)
  if(this.data.operand=== null){
    this.data.operand =value;
    return;
  }

  this.data.operand = this.data.operand + 1;

  if(operation=== '+'){
     this.data.operand = this.data.operand + value;
  }else if(operation=== '-'){
    this.data.operand = this.data.operand - value;
  }else if(operation=== '*'){
    this.data.operand = this.data.operand * value;
  }else if(operation=== '/'){
    this.data.operand = this.data.operand / value;
  }else{
    return;
  }
    this.setData({result: this.data.operand});
},
tapfunction:function(e){
  console.log(e);
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
  }
})