<template>
  <div id="app">
    <Header />
    <img id="logo" alt="Vue logo" src="./assets/logo.png">
    <ImageSearch />
  </div>
</template>

<script>
import Header from './components/Header';
import ImageSearch from './components/ImageSearch';

export default {
  name: 'App',
  components: {
    Header,
    ImageSearch,
  }
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  text-align: center;
}
#logo {
  border-radius: 50%;
  box-shadow: 1px 5px 5px #999;
  margin: 5vh auto;
  display: block;
}
</style>
