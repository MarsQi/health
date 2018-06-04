<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import initcordova from '@/plugins/initCordova'
// import '@/plugins/vconsole.min.js'
export default {
  name: 'App'
}
</script>

<style>
#app{
  height: 100%;
  width: 100%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  background-color: #f5f5f3;
}
</style>
