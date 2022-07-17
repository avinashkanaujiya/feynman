<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { db } from './main';
</script>
<template>
  <div id="app" class="content">
    <router-view/>
  </div>
</template>
<style lang="scss">
#app {
  max-width: 1280px;
  margin: 0 auto;
  // padding: 1rem;
  background: #EBEBEB;
  font-weight: normal;
  box-sizing: border-box;
}
body {
  margin: 0;
  box-sizing: border-box;
}
</style>