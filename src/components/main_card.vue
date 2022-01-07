<template>
  <b-col md="4">
    <b-card :title="title" :img-src="img" img-alt="Image" img-top class="mb-2">
      <b-card-text> 第{{ number }}陣 </b-card-text>
      <div class="mx-auto">
        <b-button-group>
          <router-link :to="linkto">
            <b-button variant="outline-primary">詳しく</b-button>
          </router-link>
          <b-button :v-b-toggle="collapseid" variant="outline-info"
            >Member</b-button
          >
        </b-button-group>
        <b-collapse :id="collapseid" class="mt-2">
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
    var collapseid = "collapseid"+this.linkto.slice(1);
    console.log(collapseid);
    return {
      collapseid
    };
  },
};
</script>
