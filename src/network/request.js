import axios from "axios";

export function mapRequest(config){
  const instance = axios.create({
    baseURL:'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
    timeout:5000
  })
  return instance(config)
}

export function mapRequest2(config){
  const instance = axios.create({
    baseURL:'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/geo/HK.json',
    timeout:5000
  })
  return instance(config)
}