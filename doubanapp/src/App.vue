<template>
  <div id="app">
    <Navbar :routes="routes"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import { routes } from './router'
export default {
  name: 'app',
  data() {
    return {
      routes
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 15px;

}
</style>
