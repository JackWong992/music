<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import MHeader from '@/components/m-header/m-header'
  import Tab from '@/components/Tab/tab'
  export default {
    name: 'App',
    components: {
      MHeader,
      Tab
    }
  }
</script>

<style scoped lang="stylus">
@import "common/stylus/variable.styl"
#app
  color: $color-theme
</style>
