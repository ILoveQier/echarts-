var cityBar = document.getElementById("cityBar");
var cityBar = echarts.init(cityBar);
var app = {};
option = null;
var dataAxis = ['新北桥', '永定门外', '和平里', '安定路', '马甸', '新北桥', '永定门外', '和平里', '安定路', '马甸', '新北桥', '永定门外', '和平里', '安定路', '马甸', '新北桥', '永定门外']
var data = [1.3, 2.4, 1.2, 3.5, 1.3, 3.8, 1.5, 3.2, 2.5, 2.8, 3.5, 1.3, 3.2, 1.5, 3.2, 2.5, 2.8]
var yMax = 4;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}

option = {
  title: {
    text: '2019年2月各街道城市案件管理情况',
    top: 20,
    left: 20,
    textStyle: {
      fontSize: setFontSize(16),
      color: '#3C8ADD'
    }
  },
  grid: {
    // show: true,
    width: '86%',
    height: '40%',
    top: '75',
  },
  xAxis: {
    data: dataAxis,
    show: true,
    boundaryGap: ['20%', '20%'],
    axisLabel: {
      textStyle: {
        color: '#979BA6',
        fontWeight: 'bold',
        fontSize: setFontSize(12),
      },
      rotate: 45,
      margin: 20
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: true
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: true
    },
    axisTick: {
      show: false
    },
    splitLine: false,
    axisLabel: {
      textStyle: {
        color: '#979BA6',
        fontWeight: 'bold',
        fontSize: setFontSize(12)
      },
      formatter: v => {
        return v ? v + 'k' : v
      }
    }
  },
  series: [
    { // For shadow
      type: 'bar',
      itemStyle: {
        color: '#0D1E48',
        barBorderRadius: [5, 5, 0, 0]
      },

      barGap: '-100%',
      barWidth: '15',
      silent: true,
      data: dataShadow,
      // animation: false
    },
    {
      type: 'bar',
      barWidth: '15',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0, 0, 0, 1,
          [
            { offset: 0, color: '#3FA2F2' },
            { offset: 0.5, color: '#3691E3' },
            { offset: 1, color: '#1E56B6' }
          ]
        ),
        barBorderRadius: [5, 5, 0, 0],
        emphasis: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ]
          )
        }
      },
      data: data
    }
  ]
};

// Enable data zoom when user click bar.
// var zoomSize = 6;
// myChart.on('click', function (params) {
//     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
//     myChart.dispatchAction({
//         type: 'dataZoom',
//         startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
//         endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
//     });
// });;
if (option && typeof option === "object") {
  cityBar.setOption(option, true);
}
