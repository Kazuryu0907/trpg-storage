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
            src:require("@/imgs/void1/C1.webp")
        },
        {
            src:require("@/imgs/void1/C2.webp")
        },
        {
            src:require("@/imgs/void1/C3.webp")
        },
        {
            src:require("@/imgs/void1/C4.webp")
        },
        {
            src:require("@/imgs/void1/C5.webp")
        },
        {
            src:require("@/imgs/void1/C6.webp")
        },
        {
            src:require("@/imgs/void1/C7.webp")
        },
      ],
      title: "宵闇の嘘",
      youtube: "https://www.youtube.com/embed/nequZOzHl14",
      kp: "zenon",
      linkto: "/void1",
      PLs: [
        {
          title: "HO1",
          name: "鳳仙花　琥白",
          name_yomi: "ほうせんか　こはく(22)",
          pl: "朔間 棗",
          charaId: "-",
          islost: false
        },
        {
          title: "HO2",
          name: "玉石　有眞",
          name_yomi: "たまいし　あるま(-)",
          pl: "ハム",
          charaId: "-",
          islost: false
        },
        {
          title: "HO3",
          name: "蘇芳　隆二",
          name_yomi: "すおう　りゅうじ(-)",
          pl: "鋼鉄",
          charaId: "-",
          islost: false
        },
        {
          title: "HO4",
          name: "天弓 ナナ",
          name_yomi: "てんきゅう　なな(-)",
          pl: "塩田紺",
          charaId: "4283106",
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
