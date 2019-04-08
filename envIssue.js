var envIssue = document.getElementById("envIssue");
var myChart = echarts.init(envIssue);
var app = {};
option = null;

var seriesLabel = {
  normal: {
    borderColor: '#fff',
    borderWidth: 1,
  }
}

option = {
  legend: {
    right: 10,
    top: 10,
    textStyle: {
      color: '#fff'
    },
    width:150,
    itemWidth:10,
    itemHeight:10,
    itemGap:20,
    data: ['内部监督', '外部监督', '小循环案件']
  },
  color: ['#45A3F6', '#D23B35', '#E3B540'],
  title: {
    text: '2019年2月环境问题案件量趋势',
    top: 20,
    left: 20,
    textStyle: {
      color: '#3C8ADD'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: 100,
    top: 60,
    width: '80%',
    height: '60%'
  },
  xAxis: {
    type: 'value',
    name: '数量',
    boundaryGap: [0, '20%'],
    max: 400,
    min: 0,
    interval: 50,
    splitLine: {
      lineStyle: {
        color: ['#2B304E'],
        opacity: 0.4
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      margin: 20,
      rotate: 45,
      formatter: (v) => {
        return v * 1000
      },
      color: '#fff'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
    data: ['市容环境', '生态环境', '设施环境', '秩序环境'],
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: '#fff',
      fontSize: 14,
      margin: 20,
    }
  },
  series: [
    {
      name: '小循环案件',
      type: 'bar',
      barGap: '10%',
      itemStyle: seriesLabel,
      data: [22, 12, 33, 44]
    },
    {
      name: '内部监督',
      type: 'bar',
      data: [315, 120, 30, 145],
      itemStyle: seriesLabel,
    },
    {
      name: '外部监督',
      type: 'bar',
      itemStyle: seriesLabel,
      data: [55, 36, 52, 21]
    },
  ]
};

if (option && typeof option === "object") {
  myChart.setOption(option, true);
}