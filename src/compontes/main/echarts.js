import React from 'react';
import echarts from 'echarts'
class Echarts extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption( {


    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
  })
};

  render () {
    let styles={
      marginTop:'5rem',
      width:470,
      height:300,
      margin:'0 auto'
    }
    return(
      <div id='main' style={styles}>
      </div>
    )
  }
}

export default Echarts;
