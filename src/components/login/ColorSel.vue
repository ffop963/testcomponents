<template>
  <div class="bd">
    <template v-for="(item,index) in colorArr">
      <input type="checkbox" :id="item" v-model="colorList" :value="item" @change="chColor">
      <label :for="item"  :style="{'background-color':item,'width':width,'height':height,'box-shadow':colorList.indexOf(item)>-1 ? checkedStryle[item] : ''}">
      </label>
    </template>
  </div>
</template>

<script>
export default {
  name: "ColorSel",
  data(){
    return {
      colorList:[],
      checkedStryle:{}
    }
  },
  methods:{
    chColor(){
      this.$emit('chColor',this.colorList)
    }
  },
  props:{
    colorArr:{
      type:Array,
      default:[]
    },
    height: {
      type:String,
      default: '30px'
    },
    width: {
      type:String,
      default: '30px'
    }
  },
  created() {
    for (let i in this.colorArr){
      this.checkedStryle[this.colorArr[i]]= `0px 0px 3px 3px ${this.colorArr[i]}`
    }
  }
}
</script>

<style scoped>
.bd{
  display: flex;

}
label{
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}
input[type="checkbox"] {
  display: none;
}
/*input[type="checkbox"]:checked+label{*/
/*  box-shadow: 0px 0px 2px 2px rebeccapurple;*/
/*}*/
</style>