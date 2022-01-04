<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
    </nav>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button class="btn btn-primary">bootstrap</button>
    <b-button variant="primary">bootstrap</b-button>
    <b-row>
      <b-col>
  <b-card
    title="cat"
    img-src="./imgs/mj_3ds_1.webp"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      第2陣
    </b-card-text>

    <b-button href="#" variant="primary">詳しく</b-button>
  </b-card>
  </b-col>
        <b-col>
  <b-card
    title="異能警察"
    img-src="./imgs/1.webp"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      第2陣
    </b-card-text>

    <b-button href="#" variant="primary">詳しく</b-button>
  </b-card>
  </b-col>
  </b-row>
      <b-row>
      <b-col>
  <b-card
    title="cat"
    img-src="./imgs/mj_3ds_1.webp"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      第2陣
    </b-card-text>

    <b-button href="#" variant="primary">詳しく</b-button>
  </b-card>
  </b-col>
        <b-col>
  <b-card
    title="異能警察"
    img-src="./imgs/1.webp"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      第2陣
    </b-card-text>

    <b-button href="#" variant="primary">詳しく</b-button>
  </b-card>
  </b-col>
  </b-row>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
