<template>
  <childpage :title="title" :linkto="linkto" :youtube="youtube" :PLs="PLs" :carrouselimg="carrouselimg" :kp="kp">
  <template v-slot:memo>
      <v-row>
      <v-col><b-img src="@/imgs/densi1/memo1.webp" height="250px"/></v-col>
      <v-col><b-img src="@/imgs/densi1/memo2.webp" height="250px"/></v-col>
      </v-row>
  </template>
  </childpage>
</template>

<script>
import childpage from '../../components/child_card.vue'
export default {
  data() {
    return {
      carrouselimg:[
        {
            src:require("@/imgs/densi1/main.webp")
        },{
            src:require('@/imgs/densi1/C1.webp')
        }
      ],
      title: "電子∞感染",
      linkto: "/densi1",
      youtube:"https://www.youtube.com/embed/videoseries?list=PLivFps-f1zHRSgJN_T_Xr2-4jz0XeOH4v",
      kp: "塩田紺",
      PLs: [
        {
          title: "PC1",
          name: "麻上　柚枝",
          name_yomi: "あさがみ　ゆえ",
          pl: "ハム",
          charaId: "4286654",
          islost: false
        },
        {
          title: "PC2",
          name: "黒木　緋色",
          name_yomi: "くろき　ひいろ",
          pl: "鋼鉄",
          charaId: "https://iachara.com/char/2647533/view",
          islost: false
        },
        {
          title: "PC3",
          name: "胡桃　兄悟",
          name_yomi: "くるみ　けいご",
          pl: "朔間　棗",
          charaId: "4301628",
          islost: false
        },
        {
          title: "PC4",
          name: "松井 昭一",
          name_yomi: "まつい　しょういち",
          pl: "zenon",
          charaId: "4292342",
          islost: false
        },
      ],
    };
  },
  name: "home",
  components: {
    childpage,
  },
};
</script>
