<template>
  <div class="map" ref="map"></div>
</template>

<script>
import * as echarts from 'echarts'
import {mapRequest,mapRequest2} from "@/network/request";
export default {
  name: "Map",
  created() {
    window.addEventListener('resize',()=>{
      console.log(12)
    })
    // mapRequest().then((res)=>{
    //   console.log(res)
    // })

  },
  mounted() {

    const map_char = echarts.init(this.$refs.map);
    mapRequest().then((res)=>{
      console.log(res.data);
      echarts.registerMap('china',res.data);
      const option = {
        series:{
          type:'map',
          map:'china',
          roam:true,
          nameMap:{
            '北京市':'111'
          }
        }
      }
      map_char.setOption(option);

    })
    map_char.on('click',(param)=>{
      console.log(param)
    })
  }
}
</script>

<style scoped>
.map {
  height: 400px;
  width: 400px;
}
</style>