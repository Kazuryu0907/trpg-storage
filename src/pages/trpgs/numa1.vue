<template>
  <childpage :title="title" :img="img" :linkto="linkto" :youtube="youtube" :PLs="PLs" :carrouselimg="carrouselimg" :kp="kp"/>
</template>

<script>
import childpage from '../../components/child_card.vue'
export default {
  data() {
    return {
      carrouselimg:[
        {
          src: require("@/imgs/numa1/C1.webp")
        }
      ],
      title: "「沼男は誰だ？」",
      img: "require('@/imgs/numa1/main.webp')",
      linkto: "/numa1",
      kp: "鋼鉄",
      youtube: "https://www.youtube.com/embed/99iNIeyf8Mc?rel=0",
      PLs: [
        {
          title: "HO1",
          name: "桑木野　茉莉江",
          name_yomi: "くわきの　まりえ",
          pl: "zenon",
          charaId: "4271007",
          islost: false
        },
        {
          title: "HO2",
          name: "細雨　悠里",
          name_yomi: "ささめ　ゆうり",
          pl: "ハム",
          charaId: "4271251",
          islost: true
        },
        {
          title: "HO3",
          name: "花車　柊橙",
          name_yomi: "はなぐるま　しゅうと",
          pl: "朔間　棗",
          charaId: "4273255",
          islost: false
        },
        {
          title: "HO4",
          name: "森田 陽平",
          name_yomi: "もりた ようへい",
          pl: "塩田紺",
          charaId: "4271421",
          islost: true
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
