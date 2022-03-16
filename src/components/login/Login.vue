<template>
  <div class="back-ground">
    <div class="form">
      <h2>login</h2>
      <div class="usr iconfont">
        <input type="text" placeholder="Username">
      </div>
      <div class="psd iconfont">
        <input type="password" placeholder="Password">
      </div>
      <label for="rem">
        <input type="checkbox"  id="rem">记住密码
      </label>
      <div class="btn">
        <button>LOGIN</button>
      </div>


    </div>
  </div>
</template>

<script>

export default {
  name: "Login"
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: 'iconfont';  /* project id 3216054 */
  src: url('');
  src: url('?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_3216054_kqbf3qdyw3q.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_3216054_kqbf3qdyw3q.woff') format('woff'),
  url('//at.alicdn.com/t/font_3216054_kqbf3qdyw3q.ttf') format('truetype'),
  url('#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.back-ground {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  border-radius: 5px;
  background: linear-gradient(135deg, #b46767 0, #6161c7 50%, #2c5c6e 50%, #6a8c6a 100%);
  animation: animate 10s linear;
}
@keyframes animate {
  0%{
      filter: hue-rotate(0deg);
  }
  100%{
      filter: hue-rotate(360deg);
  }
}
.form {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 360px;
  height: 480px;
  border-radius: 5px;
  background-color: rgba(255,255,255,.1);
  box-shadow: 0 5px 35px rgba(255,255,255,.2);

}

.form::after {
  content: '';
  position: absolute;
  top:5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  background-color: rgba(255,255,255,.3);
  z-index: -1;
}
.form h2{
  width: 60%;
  margin-bottom: 30px;
  color: white;
}
.form div {
  width: 60%;
  padding: 10px 0;
}
.form label {
  width: 60%;
}
.form .usr {
  position: relative;

}
.form input::placeholder {
  color: white;
}
.usr input,.psd input {
  outline-style: none;
  width: 100%;
  border: 1px solid rgba(255,255,255,.11);
  border-radius: 5px;
  padding: 8px 25px;
  color: white;
  background-color: rgba(255,255,255,.1);

}
.usr::before ,.psd::before{

  content:'\e63d';
  font-size: 25px;
  color: white;
  position: relative;
  top: 30px;


}
label {
  color: white;
}
label input {
  margin-right: 5px;
  outline-style: none;
  cursor:pointer;
}
label:hover {
  cursor:pointer;
}
.btn button {
  width: 90px;
  height: 43px;
  font-size: 15px;
  font-weight:600;
  box-shadow: none;
  border: none;
  cursor: pointer;
}
</style>