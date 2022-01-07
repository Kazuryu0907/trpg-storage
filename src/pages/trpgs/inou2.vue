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
          src: require("@/imgs/inou2/C1.webp")
        }
      ],
      title: "異能警察",
      img: "require('@/imgs/inou2/main.webp')",
      linkto: "/inou2",
      youtube: "",
      PLs: [
        {
          title: "HO1",
          name: "石光　正義",
          name_yomi: "いしびかり　まさよし(33)",
          pl: "らむね",
          charaId: "4273520",
          islost: false
        },
        {
          title: "HO2",
          name: "山白　雄輝",
          name_yomi: "やましろ　ゆうき(27)",
          pl: "ワシントン",
          charaId: "4294395",
          islost: false
        },
        {
          title: "HO3",
          name: "辻川　哲",
          name_yomi: "つじかわ　あきら(27)",
          pl: "kazuryu",
          charaId: "4292370",
          islost: false
        },
        {
          title: "HO4",
          name: "東野　勿草",
          name_yomi: "ひがしの　なぐさ(25)",
          pl: "綾鷹",
          charaId: "4294141",
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
