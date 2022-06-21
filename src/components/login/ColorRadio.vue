<template>
  <div class="bd">
    <template v-for="(item,index) in colorArr">
      <input type="radio" :id="item+'radio'" v-model="color" :value="item" @change="chColor">
      <label :for="item+'radio'"  :style="{'background-color':item,'width':width,'height':height,'box-shadow':color==item ? checkedStyle[item] : ''}">
      </label>
    </template>
  </div>
</template>

<script>
export default {
  name: "ColorSel",
  data(){
    return {
      color:'',
      checkedStyle:{}
    }
  },
  methods:{
    chColor(){
      this.$emit('chColor',this.color)
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
      this.checkedStyle[this.colorArr[i]]= `0px 0px 3px 3px ${this.colorArr[i]}`
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
input[type="radio"] {
  display: none;
}
/*input[type="checkbox"]:checked+label{*/
/*  box-shadow: 0px 0px 2px 2px rebeccapurple;*/
/*}*/
</style>