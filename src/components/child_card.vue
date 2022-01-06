<template>
  <div>
    <div class="home">
      <Carrousel :items="carrouselimg"/>
    </div>
    <b-container>
      <h1 class="mt-5 mb-7 marktitle"><strong>{{title}}</strong></h1>
      <h3 class="mb-4">vol.{{number}}</h3>
      <b-card-group>
        <b-card
          v-for="(pl, index) in PLs"
          :key="pl.name"
          :img-src="require('@/imgs' + linkto + '/' + (index + 1) + '.png')"
        >

        <template #header>
            <h4>{{pl.name}}</h4>
        </template>
          <b-card-sub-title
            >HO{{ index + 1 }}<br />
            <b-badge v-if="!pl.islost" variant="success">alive</b-badge>
            <b-badge v-else variant="danger">lost</b-badge>
            </b-card-sub-title
          >
          <b-card-text
            >PL:<strong>{{ pl.pl }}</strong></b-card-text
          >
          <b-list-group>
            <b-list-group-item>
              <b-link :href="'https://charasheet.vampire-blood.net/'+pl.charaId">キャラシート</b-link>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-card-group>
      <h3 class="mb-5 mt-5">アーカイブ</h3>
      <b-embed v-if="youtube != ''"
        type="iframe"
        aspect="16by9"
        src="youtube"
        allowfullscreen
        ></b-embed>
      <h3 v-else class="mb-5">アップロード待ち...</h3>
    </b-container>
  </div>
</template>

<style>
.marktitle{
  color: 	#DB7093;
  text-decoration-line: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 10px;
}
</style>
<script>
import Carrousel from "@/components/Carrousel.vue";
export default {
  name: "childpage",
    props:{
      title: {
          type: String,
          default: "",
          required: true
      },
      img: {
          type: String,
          default: "",
          require: false
      },
      number: {
          type: Number,
          default: 1,
          require: false
      },
      linkto: {
          type: String,
          default: "",
          require: true
      },
      PLs: {
          type: Object,
          default: new Array(),
          require: true
      },
      carrouselimg: {
          type: Array,
          default: new Object(),
          require: true
      },
      youtube: {
          type: String,
          default: "",
          require: false
      }

    },
  components: {
    Carrousel,
  },
};
</script>
