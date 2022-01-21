<template>
  <b-col md="4">
    <b-card :img-src="img" img-alt="Image" img-top class="mb-2">
      <b-card-title><span class="text-nowrap" style="border-bottom: solid 3px #87CEFA;">{{title}}</span></b-card-title>
      <b-card-text> 第{{ number }}陣 </b-card-text>
      <div class="mx-auto">
        <b-button-group>
          <router-link :to="{path:'/view',query: {id: id}}">
            <b-button variant="outline-primary" >詳しく</b-button>
          </router-link>
          <b-button v-on:click="expandcoll" variant="outline-info"
            >Member</b-button
          >
        </b-button-group>
        <b-collapse :visible="isexpand" class="mt-2">
          <b-list-group flush class="text-left">
            <b-list-group-item v-for="(pl, index) in PLs" :key="pl.name"
              ><span>HO{{ index + 1 }}：</span>{{ pl }}</b-list-group-item
            >
          </b-list-group>
        </b-collapse>
      </div>
    </b-card>
  </b-col>
</template>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script>

export default {
  name: "MainCard",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    img: {
      type: String,
      default: "",
      require: true,
    },
    number: {
      type: Number,
      default: 1,
      require: false,
    },
    id: {
      type: String,
      default: "",
      require: true,
    },
    PLs: {
      type: Array,
      default: new Array(),
      require: true,
    },
  },
  data() {
    return {
      isexpand: false
    };
  },
  methods: {
    expandcoll: function(){
      this.isexpand = !this.isexpand;
    }
  }
};
</script>

<style scoped>
h1 {
  position: relative;
  padding: 0.5em;
  background: #a6d3c8;
  color: white;
}

h1::before {
  position: absolute;
  content: '';
  top: 100%;
  left: 0;
  border: none;
  border-bottom: solid 15px transparent;
  border-right: solid 20px rgb(149, 158, 155);
}

</style>