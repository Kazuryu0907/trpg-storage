<template>
  <childpage :title="title" :img="img" :linkto="linkto" :youtube="youtube" :PLs="PLs" :carrouselimg="carrouselimg"/>
</template>

<script>
import childpage from '../../components/child_card.vue'
export default {
  data() {
    return {
      carrouselimg:[
        {
          src: require("@/imgs/numa1/C1.png")
        }
      ],
      title: "「沼男は誰だ？」",
      img: "require('@/imgs/numa1/C1.png')",
      linkto: "/numa1",
      youtube: "https://www.youtube.com/embed/99iNIeyf8Mc?rel=0",
      PLs: [
        {
          title: "HO1",
          name: "桑木野　茉莉江(くわきの　まりえ)",
          pl: "zenon",
          charaId: "4271007",
          islost: false
        },
        {
          title: "HO2",
          name: "細雨　悠里(ささめ　ゆうり)",
          pl: "ハム",
          charaId: "4271251",
          islost: false
        },
        {
          title: "HO3",
          name: "森田 陽平(もりた ようへい)",
          pl: "塩田紺",
          charaId: "4271421",
          islost: false
        },
        {
          title: "HO4",
          name: "花車　柊橙(はなぐるま　しゅうと)",
          pl: "朔間　棗",
          charaId: "4273255",
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
