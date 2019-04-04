var checkPie = document.getElementById("checkPie");
var myChart = echarts.init(checkPie);
var app = {};
option = null;
var data = genData(50);

option = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: 40,
    top: '15%',
    bottom: 20,
    icon: 'circle',
    itemHeight: 14,
    itemWidth: 35,
    itemGap: 20,
    textStyle: {
      fontSize: 14,
      color: '#7F7D88'
    },
    data: data.legendData,
  },
  series: [
    {
      type: 'pie',
      radius: '65%',
      center: ['30%', '50%'],
      data: [{ value: 100, name: '' }],
      labelLine: {
        show: false
      },
      itemStyle: {
        color: '#111E3E'
      },
      silent:true
    },
    {
      type: 'pie',
      radius: '55%',
      center: ['30%', '50%'],
      data: data.seriesData,
      labelLine: {
        show: false
      },
      label: {
        position: 'inside',
        formatter: '{c}%'
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};




function genData(count) {
  var nameList = [
    '监督员上报', '监督员自行处理', '环保巡查(第三方APP)', '重点督办事项', '环保巡查(环卫上报)', '视频监控', '环保巡查(环卫自处理)'
  ];
  var valueList = [13, 23, 22, 52, 42, 11, 22]
  var legendData = [];
  var seriesData = [];
  for (var i = 0; i < nameList.length; i++) {
    name = nameList[i]
    legendData.push(name);
    seriesData.push({
      name: name,
      value: valueList[i]
    });
  }

  return {
    legendData: legendData,
    seriesData: seriesData,
  };
};
if (option && typeof option === "object") {
  myChart.setOption(option, true);
}