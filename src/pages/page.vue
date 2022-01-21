<template>
  <div id="app">
    <b-container fluid="md">
      <h1 class="mb-10 mt-7"><strong>TRPG保管庫</strong></h1>
      <b-tabs align="center" pills>
        <b-row>
            <maincard v-for="data in datas" :key="data.id"
                :title="data.title"
                :img="data.img"
                :number="data.number"
                :id="data.id"
                :PLs="data.PLs"
            />
        </b-row>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
import maincard from "../components/db_main_card.vue";
import firebase from "../firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
export default {
  name: "App",
  components: {
    maincard,
  },
  async created() {
    this.db = getFirestore(firebase);
    const docs = await getDocs(collection(this.db, "main"));
    docs.forEach((doc) => {
      this.datas.push(doc.data());
    });
    console.log(this.datas);
  },
  data() {
    return {
      db: null,
      datas: [],
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

span {
  display: inline-block;
  width: 7em;
}
</style>
