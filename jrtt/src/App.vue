<template>
  <div id="app">
    <div class="navbar"><span class="nav-item" v-for="item in navList">
      <router-link exact :id="item.id" :to="item.path">{{item.name}}</router-link>
    </span></div>
    <router-view></router-view>
  </div>
</template>
<script>
import {routes} from './router'
export default {
  name: 'app',
  data() {
    return {
      navList: routes[2].children
    }
  }
}
</script>

<style lang="less">
html, body {
  margin: 0;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .navbar {
    display: flex;
    flex-wrap: no-wrap;
    aligin-content: space-between;
    background: #f4f5f6;
  }
  .nav-item {
    padding: 5px 15px;
    flex-basis: 100%;
    flex: 1;
    justify-content: space-between;
    text-align: center;
    a {
      text-decoration: none;
      color: #000;
    }
    .router-link-exact-active {
      color: red!important;
    }
  }
    color: #2c3e50;
}

</style>
