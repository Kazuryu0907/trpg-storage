<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
    </nav>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button class="btn btn-primary">bootstrap</button>
    <b-button variant="primary">bootstrap</b-button>
    <b-container fluid="md">
      <b-tabs align="center" pills>
        <b-row>
          <b-col md="4">
            <b-card
              title="cat"
              img-src="./imgs/mj_3ds_1.webp"
              img-alt="Image"
              img-top
              id="card-img"
            >
              <b-card-text> 第2陣 </b-card-text>

              <b-button href="#" variant="primary">詳しく</b-button>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card
              title="異能警察"
              img-src="./imgs/1.webp"
              img-alt="Image"
              img-top
              class="mb-2"
            >
              <b-card-text> 第2陣 </b-card-text>
              <div class="mx-auto">
                <b-button-group>
                  <b-button href="#" variant="outline-primary">詳しく</b-button>
                  <b-button variant="outline-info">Member</b-button>
                </b-button-group>
              </div>
            </b-card>
          </b-col>
          <b-col md="4">
            <div class="card text-center">
              <img
                id="card-img"
                class="card-img-top"
                src="./imgs/1.webp"
                alt=""
              />
              <div class="card-body mx-auto">
                <h4 class="card-title">異能警察</h4>
                <p class="card-text">第2陣</p>
                <div class="mx-auto">
                  <b-button-group>
                    <b-button href="#" variant="outline-primary">詳しく</b-button>
                    <b-button variant="outline-info">Member</b-button>
                  </b-button-group>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-tabs>
    </b-container>
    <div class="mx-auto">
      <b-card-group deck>
        <b-card
          title="cat"
          img-src="./imgs/mj_3ds_1.webp"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> 第2陣 </b-card-text>
          <b-button-group class="mt-3">
            <b-button v-b-toggle.demo1 pill href="#" variant="outline-primary"
              >詳しく</b-button
            >
            <b-button pill target="#demo1" variant="outline-info"
              >Menber</b-button
            >
          </b-button-group>
          <b-collapse id="demo1">AAAAAAAA</b-collapse>
        </b-card>
        <b-card
          title="cat"
          img-src="./imgs/mj_3ds_1.webp"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> 第2陣 </b-card-text>

          <b-button href="#" variant="primary">詳しく</b-button>
        </b-card>
        <b-card
          title="cat"
          img-src="./imgs/mj_3ds_1.webp"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> 第2陣 </b-card-text>

          <b-button href="#" variant="primary">詳しく</b-button>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
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

#card-img {
  width: 100%;
  cursor: pointer;
  transition-duration: 0.3s;
}

#card-img:hover {
  opacity: 0.6;
  transition-duration: 0.3s;
}
</style>
