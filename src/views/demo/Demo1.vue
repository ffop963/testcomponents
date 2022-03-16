<template>
  <div ref="demo1" id="demo1">

  </div>
</template>

<script>
import * as echarts from 'echarts';


export default {
  name: "Demo1",
  mounted() {
    this.$nextTick(()=>{
      console.log(echarts)
      console.log(document.querySelector('#demo1'))
      let myChart = echarts.init(this.$refs.demo1);

// 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {

        },
        yAxis: {
          type:'category',
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    })

  }
}
</script>

<style scoped>
 #demo1 {
   height: 800px;
   width: 800px;
 }
</style>