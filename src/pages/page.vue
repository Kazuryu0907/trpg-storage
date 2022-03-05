<template>
  <div id="app">
    <b-container fluid="md">
      <h1 class="mb-10 mt-7"><strong>TRPG保管庫</strong></h1>
      <b-row
        ><b-col cols="2" offset="9"
          ><b-form-select
            v-model="sort"
            :options="options"
            class="mb-3"
          ></b-form-select></b-col
      ></b-row>
      <b-tabs align="center" pills>
        <b-row>
          <maincard
            v-for="data in datas"
            :key="data.id"
            :title="data.title"
            :img="data.img"
            :number="data.number"
            :id="data.id"
            :PLs="data.PLs"
            :kp="data.kp"
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
    this.originalDatas = [...this.datas];
  },
  watch:{
    sort:function(newV,oldV){
      oldV;
      console.log(newV);
      this.$data.datas = [...this.$data.originalDatas];
      switch(newV){
        case "KP":
          this.$data.datas.sort((a,b) => a.kp > b.kp ? 1 : -1);
          break;
        case "id":
          this.$data.datas.sort((a,b) => a.id > b.id ? 1 : -1);
          break;
        case "hasYoutube":
          this.$data.datas = [...this.$data.originalDatas.filter((a) => a.youtube)];
          break;
        case "hasntYoutube":
          this.$data.datas = [...this.$data.originalDatas.filter((a) => !a.youtube)];
          break;
        case "lastUpdate":
          break;
       }
    },
    datas:function(newV,oldV){
         oldV;newV;
         console.log(newV);
      }
  },
  computed: {

  },
  data() {
    return {
      db: null,
      datas: [],
      originalDatas: [],
      sort: "id",
      options: [
        {value: "id",text:"id順"},
        {value: "hasYoutube",text:"アーカイブあり"},
        {value: "hasntYoutube",text:"アーカイブなし"},
        {value: "lastUpdate",text:"最終更新日",disabled:true},
        {value: "KP",text:"KP順"}
      ]
    };
  },
  methods: {},
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

.btn--orange {
  color: #fff;
  background-color: #eb6100;
  border-bottom: 5px solid #b84c00;
}
.btn--orange:hover {
  margin-top: 3px;
  color: #fff;
  background: #f56500;
  border-bottom: 2px solid #b84c00;
}
.btn--shadow {
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}
</style>
