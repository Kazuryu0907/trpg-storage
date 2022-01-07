<template>
  <childpage :title="title" :img="img" :linkto="linkto" :PLs="PLs" :carrouselimg="carrouselimg" :kp="kp"/>
</template>

<script>
import childpage from '../../components/child_card.vue'
export default {
  data() {
    return {
      carrouselimg:[
        {
          src: require("@/imgs/ga1/C2.webp")
        },
        {
          src: require("@/imgs/ga1/C3.webp")
        },
      ],
      title: "蛾と踊る",
      img: "require('@/imgs/ga1/C1.webp')",
      linkto: "/ga1",
      kp: "鋼鉄",
      PLs: [
        {
          title: "HO1",
          name: "丸木戸　聖悟",
          name_yomi: "まるきど　せいご",
          pl: "zenon",
          charaId: "4300917",
          islost: false
        },
        {
          title: "HO2",
          name: "大隅　菊代",
          name_yomi: "おおすみ　きくよ",
          pl: "ハム",
          charaId: "4292292",
          islost: false
        },
        {
          title: "HO3",
          name: "田　万次郎",
          name_yomi:"じょん　まんじろう", 
          pl: "kazuryu",
          charaId: "4300781",
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
