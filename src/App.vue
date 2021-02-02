<template> 
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/css/format.css";
#app{
  width: 100%;
  height: 100%;
}
.my-station-marker {
  .center {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    animation: myStationMaeker linear 600ms infinite alternate;
  }
  .c1 {
    position: absolute;
    top: -20px;
    left: -20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid orange;
    opacity: 0.6;
    animation: myStationC1 linear 800ms infinite;
  }
  .c2 {
    position: absolute;
    top: -30px;
    left: -30px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid orange;
    opacity: 0.6;
    animation: myStationC1 linear 800ms infinite;
  }
  .txt {
    position: absolute;
    top: 15px;
    left: -65px;
    width: 140px;
    > p {
      white-space: nowrap;
      text-align: center;
      font-weight: 600;
      color: red;
      margin: 0;
      line-height: 16px;
    }
  }
}
@keyframes myStationMaeker {
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 1);
  }
  100% {
    box-shadow: 0 0 0px rgba(255, 255, 255, 1);
  }
}
</style>
