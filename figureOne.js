var figureOne = document.getElementById("figureOne");
var myChart = echarts.init(figureOne);
var app = {};
option = null;
option = {
  tooltip: {
    formatter: "{c}个"
  },
  title: {
    show: true,
    text: '单位：万/个',
    right: 110,
    bottom: 40,
    textStyle: {
      color: '#7E808E'
    }
  },
  series: [
    {
      zLevel: 1,
      name: '业务指标',
      type: 'gauge',
      radius: '90%',
      startAngle: 210,
      endAngle: -30,
      max: 60000,
      min: 0,
      splitNumber: 6,
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: [[1, '#111633']],
          width: 12,
          shadowColor: '#4094F3',
          shadowBlur: 50
        }
      },
      axisLabel: {
        fontSize: 16,
        color: '#fff',
        distance: 5,
        formatter: function (value) {
          return value / 10000;
        }
      },
      pointer: {
        width: 5,
        length: '50%'
      },
      itemStyle: {
        color: '#4186D7',
        shadowColor: '#fff',
        shadowBlur: 30
      },
      detail: {
        fontSize: 46,
        formatter: '{value}',
        color: '#4186D7',
        offsetCenter: [0, '70%'],
        textShadowColor: '#4186D7',
        textShadowBlur: 20
      },
      data: [{ value: 48960, name: '案件量' }],
      title: {
        offsetCenter: [0, '34%'],
        color: '#fff',
        fontSize: 22
      }
    },
    {
      silent: true,
      name: '数量',
      type: 'pie',
      startAngle: 210,
      radius: ['82%', '90%'],
      center: ['50%', '50%'],
      legendHoverLink: false,
      hoverAnimation: false,
      avoidLabelOverlap: false,
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {
          value: 48960,
          itemStyle: {
            normal: {
              color: "#4195F2"
            }
          }
        },
        {
          // 饼图需要按照圆环的总长度减去现有长度
          value: 80000*(1+1/9) - 48960,
          itemStyle: {
            normal: {
              color: "rgba(35,206,167,0)"
            }
          }
        },

      ]
    }
  ]
};

if (option && typeof option === "object") {
  myChart.setOption(option, true);
}