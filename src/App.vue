<template>
  <div id="app">
    <div id="nav">
      <!-- //TODO:  this is a test -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
body {
  margin: 0px;
  font-family: "Lato" sans-serif;
  // padding: 10px;
}
body::-webkit-scrollbar {
  display: none !important;
}
* {
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
html,
body {
  height: 100%;
}
</style>
