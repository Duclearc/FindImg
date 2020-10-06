<template>
  <div id="app">
    <Header />
    <div id="content">
      <a href="https:github.com/Duclearc">
        <img id="logo" alt="Vue logo" src="./assets/logo.png" />
      </a>
      <ImageSearch />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSearch from "./components/ImageSearch";

export default {
  name: "App",
  components: {
    Header,
    ImageSearch,
    Footer
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  background-color: rgba(170, 170, 170, 1);
}
#app {
  text-align: center;
  position: relative;
  min-height: 100%;
}
#content {
  padding-bottom: 3rem;
  background-color: rgba(255, 255, 255, 1);
  min-height: 80vh;
  padding-top: 1rem;
}
#logo {
  border-radius: 50%;
  box-shadow: 1px 5px 5px rgba(153, 153, 153, 1);
  margin: 5vh auto;
  display: block;
}
#logo:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
}
a:focus {
    outline: none;
}
</style>
