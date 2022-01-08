<template>
  <b-col md="4">
    <b-card :title="title" :img-src="img" img-alt="Image" img-top class="mb-2">
      <b-card-text> 第{{ number }}陣 </b-card-text>
      <div class="mx-auto">
        <b-button-group>
          <router-link :to="linkto">
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
// (function($){
//   const card = $(`#${collapseid}`);
//   $(`#btn${collapseid}`).on('click',(e) => {
//     card.collapse("toggle");
//   })
// })(jQuery);

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
    linkto: {
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
