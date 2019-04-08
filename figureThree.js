var figureThree = document.getElementById("figureThree");
var myChart = echarts.init(figureThree);
var app = {};
option = null;
option = {
  tooltip: {
    trigger: 'item',
    formatter: "{c}%"
  },
  legend: {
    show: true,
    right: '30%',
    bottom: '10%',
    data: ['同比', '环比'],
    orient: 'vertical',
    textStyle: {
      color: '#848591',
      fontWeight: 'bold',
    },
    itemGap:20
  },
  xAxis: {
    type: 'category',
    data: [1,1],
    axisLabel: {
      show:false
    }
  },
  yAxis: {
    min: -50,
    interval: 50,
    max: 50,
    type: 'value',
    splitLine: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: '#979BA6',
        fontWeight: 'bold',
        fontSize: 14,
        margin: 10,
        verticalAlign: 'middle',
      },
      formatter: v => {
        return v ? v + '%' : v
      }
    },
    axisTick: {
      show: false,
    }
  },
  grid: {
    height: '70%',
    width: '70%',
    bottom: 40,
  },
  series: [
    {
      name: '同比',
      type: 'bar',
      barWidth: '35',
      barGap:'150%',
      itemStyle: {
        normal: {
          color: '#456AEC',
          barBorderRadius: [5, 5, 0, 0],
        }
      },
      data: [40]
    },
    {
      name: '环比',
      type: 'bar',
      barWidth: '35',
      itemStyle: {
        normal: {
          color: '#ED3770',
          barBorderRadius: [5, 5, 0, 0],
        }
      },
      data: [20]
    }
  ]
};


if (option && typeof option === "object") {
  myChart.setOption(option, true);
}