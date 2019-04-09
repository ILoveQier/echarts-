var figureTwo = document.getElementById("figureTwo");
var figureTwo = echarts.init(figureTwo);
var app = {};
option = null;
option = {
  tooltip: {
    formatter: "{c}小时"
  },
  title: {
    show: true,
    text: '单位：小时',
    bottom: '2%',
    right: '34%',
    textStyle: {
      color: '#7E808E',
      fontSize: setFontSize(14),
    }
  },
  series: [
    {
      zLevel: 1,
      name: '续存时间',
      type: 'gauge',
      radius: '90%',
      startAngle: 215,
      endAngle: -35,
      max: 60,
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
          width: 10,
          shadowColor: '#4094F3',
          shadowBlur: 30
        }
      },
      axisLabel: {
        fontSize: setFontSize(12),
        color: '#fff',
        distance: -5,
        formatter: function (value) {
          return value / 10;
        }
      },
      pointer: {
        width: 3,
        length: '40%'
      },
      itemStyle: {
        color: '#4186D7',
        shadowColor: '#fff',
        shadowBlur: 30
      },
      detail: {
        fontSize: setFontSize(24),
        formatter: '{value}',
        color: '#4186D7',
        offsetCenter: [0, '70%'],
        textShadowColor: '#4186D7',
        textShadowBlur: 20,
        fontWeight: 'bold'
      },
      data: [{ value: 17, name: '存续时间' }],
      title: {
        offsetCenter: [0, '40%'],
        color: '#fff',
        fontSize: setFontSize(16),
      }
    },
    {
      silent: true,
      name: '数量',
      type: 'pie',
      startAngle: 215,
      radius: ['81%', '90%'],
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
          value: 17,
          itemStyle: {
            normal: {
              color: "#4195F2"
            }
          }
        },
        {
          // 饼图需要按照圆环的总长度减去现有长度
          value: 80 * (1 + 1 / 12) - 17,
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
  figureTwo.setOption(option, true);
}