<template>
  <div id="app">
    <b-container fluid="md">
      <h1 class="mb-10 mt-11"><strong>TRPG保管庫</strong></h1>
      <b-tabs align="center" pills>
        <b-row>
          <maincard
            title="異能警察"
            :img="require('@/imgs/inou2/main.webp')"
            :number=2
            linkto="/inou2"
            :PLs="['らむね','ワシントン','kazuryu','綾鷹']"
          />
          <maincard
            title="蛾と踊る"
            :img="require('@/imgs/ga1/main.webp')"
            linkto="/ga1"
            :PLs="['zenon','ハム','kazuryu']"
          />
          <maincard
            title="「沼男は誰だ？」"
            :img="require('@/imgs/numa1/main.webp')"
            linkto="/numa1"
            :PLs="['zenon','ハム','塩田紺','朔間 棗']"
          />
        </b-row>
      </b-tabs>
    </b-container>
    <div class="mx-auto">
      <b-card-group deck>
        <b-card
          title="cat"
          img-src="../imgs/mj_3ds_1.webp"
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
        </b-card>
        <b-card
          title="cat"
          img-src="../imgs/mj_3ds_1.webp"
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
          img-src="../imgs/mj_3ds_1.webp"
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
import maincard from "../components/main_card.vue";

export default {
  name: "App",
  components: {
    maincard,
  },
  data() {
    return {
    };
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
  /* margin-top: 60px; */
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

span {
  display: inline-block;
  width: 7em;
}
.sample1 {
  position: relative; /* 相対位置指定 */
}
.sample1 .caption {
  font-size: 130%;
  text-align: center;
  padding-top: 60px;
  color: #fff;
}
.sample1 .mask {
  width: 100%;
  height: 100%;
  position: absolute; /* 絶対位置指定 */
  top: 0;
  left: 0;
  opacity: 0; /* マスクを表示しない */
  background-color: rgba(0, 0, 0, 0.4); /* マスクは半透明 */
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.sample1:hover .mask {
  opacity: 1; /* マスクを表示する */
}
</style>
