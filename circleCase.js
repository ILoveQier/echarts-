var circelCase = document.getElementById("circleCase");
var myChart = echarts.init(circelCase);
option = null;
option = {
  title: {
    text: '案件循环分类占比',
    x: 20,
    y: 15,
    textStyle: {
      color: '#2D7CD3',
      fontSize: 16,
      fontWeight: 'bold'
    }
  },
  color: ['#44A4F7', '#D13B37', '#EAB23F'],
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} %"
  },
  legend: {
    orient: 'vertical',
    y: '35%',
    x: 30,
    itemGap: 20,
    textStyle: {
      color: '#fff',
      fontSize: 16,
      padding: [0, 0, 0, 10]
    },
    data: ['大循环案件', '小循环案件', '微循环案件']
  },
  series: [
    {
      center: ['60%', '55%'],
      name: '案件来源',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          color:'#fff',
          formatter: '{c}%',
          verticalAlign: 'top',
        },
      },
      labelLine: {
        normal: {
          show: true,
          color:'#fff'
        }
      },
      data: [
        { value: 89, name: '大循环案件' },
        { value: 9, name: '小循环案件' },
        { value: 2, name: '微循环案件' },
      ]
    }
  ]
};

if (option && typeof option === "object") {
  myChart.setOption(option, true);
}