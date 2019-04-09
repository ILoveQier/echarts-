var cityLine = document.getElementById("cityLine");
var cityLine = echarts.init(cityLine);
var xData = []
for (let index = 1; index < 29; index++) {
  xData.push(index)
}
var app = {};
option = null;
option = {
  title: {
    text: '2019年2月各街道城市案件管理情况',
    top: 20,
    left: 20,
    textStyle: {
      color: '#3C8ADD',
      fontSize: setFontSize(14),
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  color: ['#4769E6', '#C53C6D', '#5DC3C7'],
  legend: {
    textStyle: {
      fontSize: setFontSize(12),
      color: '#7F7D88'
    },
    top: 20,
    right: 20,
    itemHeight: 4,
    itemWidth: 35,
    itemGap: 15,
    data: [{
      name: '网络案件',
      icon: 'rect',
    }, {
      name: '便民事项',
      icon: 'rect',
    }, {
      name: '小循环',
      icon: 'rect',
    }]
  },
  grid: {
    // show: true,
    width: '86%',
    height: '50%',
    top: '75',
  },
  xAxis: {
    type: 'category',
    boundaryGap: [0, '20%'],
    data: xData,
    axisTick: {
      show: false
    },

    axisLabel: {
      // inside: true,
      textStyle: {
        color: '#979BA6',
        fontWeight: 'bold',
      fontSize: setFontSize(12),

      },
      margin: 15
    },
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 2000,
    interval: 500,
    boundaryGap: true,
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: ['#2B304E'],
        opacity: 0.4
      },
    },
    axisLine: {
      lineStyle: {
        color: '#2B304E'
      }
    },
    axisLabel: {
      textStyle: {
        color: '#979BA6',
        fontWeight: 'bold',
        fontSize: setFontSize(12),
      },
      align: 'left',
      margin: 50
    }
  },
  series: [
    {
      name: '网络案件',
      type: 'line',
      lineStyle: {
        color: '#3657B4',
      },
      data: [1220, 1532, 1501, 1434, 1290, 1230, 1374, 1290, 1230, 1310, 1374, 1290, 1230, 1610, 1320, 1232, 1501, 1434, 1290, 1230, 1310, 1320, 1232, 1301, 1231, 790, 1630, 1310, 1120]
    },
    {
      name: '便民事项',
      type: 'line',
      lineStyle: {
        color: '#CB3B6F',
      },
      data: [220, 182, 191, 234, 290, 330, 310, 890, 430, 374, 790, 630, 310, 120, 132, 101, 220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230, 210, 120, 132, 101]
    },
    {
      name: '小循环',
      type: 'line',
      lineStyle: {
        color: '#5FC8CB',
      },
      data: [310, 101, 134, 90, 230, 210, 120, 191, 234, 290, 330, 310, 101, 310, 290, 330, 310, 101, 134, 90, 230, 210, 120, 132, 101, 220, 182, 191, 234, 290]
    },
  ]
};
;
if (option && typeof option === "object") {
  cityLine.setOption(option, true);
}
