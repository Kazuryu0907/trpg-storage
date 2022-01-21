<template>
  <div>
    <b-modal v-if="isconcealment" id="concealment-modal" size="lg" centered hide-footer title="注意！">
      <div class="d-block text-center">
        <h4>この先秘匿に触れる可能性があります<br>進みますか？</h4>
      </div>
      <b-button class="mt-3 ml-3" variant="warning" @click="hidemodal">進む</b-button>
      <b-button class="mt-3 ml-3" variant="primary" @click="gohome">戻る</b-button>
    </b-modal>
    <div class="home">
      <Carrousel :items="carrouselimg" />
    </div>
    <b-container>
      <h1 class="mt-5 mb-7 marktitle">
        <strong>{{ title }}</strong>
      </h1>
      <h3 class="mb-4">vol.{{ number }}</h3>
      <h4 class="mt-2">
        KP:<strong>{{ kp }}</strong>
      </h4>
      <b-card-group>
        <b-card
          v-for="(pl, index) in PLs"
          :key="pl.plname"
          :img-src="pl.img_url"
        >
          <template #header>
            <h4>{{ pl.pcname }}</h4>
            <h5 style="color: gray;">{{ pl.name_yomi }}</h5>
          </template>
          <b-card-sub-title
            >HO{{ index + 1 }}<br />
            <b-badge v-if="pl.islost == 'surv'" variant="success">survival</b-badge>
            <b-badge v-else variant="danger">lost</b-badge>
          </b-card-sub-title>
          <b-card-text
            >PL:<strong>{{ pl.plname }}</strong></b-card-text
          >
          <b-list-group>
            <b-list-group-item>
              <b-link :href="pl.url"
              >キャラシート</b-link>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-card-group>
      <v-row>
        <v-col>
          <h3 class="mb-5 mt-5">MEMO</h3>
          <slot name="memo" />
        </v-col>
        <v-col>
          <h3 class="mb-5 mt-5">ARCHIVE</h3>
            <b-embed
              v-if="youtube.match(/http/)"
              type="iframe"
              aspect="16by9"
              :src="youtube"
              allowfullscreen
            ></b-embed>
            <h3 v-else class="mb-5 mt-5">アップロード待ち...</h3>
        </v-col>
      </v-row>
    </b-container>
  </div>
</template>

<style>
.marktitle {
  color: #db7093;
  text-decoration-line: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 10px;
}


</style>
<script>
import Carrousel from "@/components/Carrousel.vue";
export default {
  mounted(){
    // this.$bvModal.show('concealment-modal')
  },
  methods: {
    gohome(){
      this.$router.push("/");
    },
    hidemodal(){
      this.$bvModal.hide('concealment-modal');
    }
  },
  name: "childpage",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    img: {
      type: String,
      default: "",
      require: false,
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
    carrouselimg: {
      type: Array,
      default: new Array(),
      require: true,
    },
    youtube: {
      type: String,
      default: "",
      require: false,
    },
    kp: {
      type: String,
      default: "",
      require: false,
    },
    isconcealment: {
      type: Boolean,
      default: true,
      require: false
    }
  },
  components: {
    Carrousel,
  },
};
</script>
