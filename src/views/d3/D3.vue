<template>
  <div class="D3">
    <div class="test">123</div>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  name: "D3",
  data(){
    return{}
  },
  created() {
    console.log(d3.select('.test').html())
  }
}
</script>

<style scoped>

</style>