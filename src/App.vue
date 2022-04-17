<template>
  <div id="app">
    <layout-default class="pb-5">
      <!-- spa  -->
      <div class="container-xl">
        <router-view></router-view>

      </div>
    </layout-default>

  </div>
</template>

<script>

import LayoutDefault from "./Layout/LayoutDefault.vue"

export default {
  name: 'App',
  components: {
    LayoutDefault
  }
}
</script>

<style>
#app {
  text-align: right;
  color: #2c3e50;
  direction: rtl;
  position: relative;
  min-height: 100vh;
}
body{
  background: #f4f2f2;
  height: 100vh;

}
@font-face {
  font-family: iransanse;
  src: url('./assets/fonts/woff/IRANSansWeb_Medium.woff');
}
*{
  font-family: iransanse;
  padding: 0;
  margin: 0;
}

</style>
