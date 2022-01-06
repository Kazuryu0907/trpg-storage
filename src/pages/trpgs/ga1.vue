<template>
  <childpage :title="title" :img="img" :linkto="linkto" :PLs="PLs" :carrouselimg="carrouselimg"/>
</template>

<script>
import childpage from '../../components/child_card.vue'
export default {
  data() {
    return {
      carrouselimg:[
        {
          src: require("@/imgs/ga1/C1.png")
        },
        {
          src: require("@/imgs/ga1/C2.png")
        },
        {
          src: require("@/imgs/ga1/C3.png")
        },
      ],
      title: "蛾と踊る",
      img: "require('@/imgs/ga1/C1.png')",
      linkto: "/ga1",
      PLs: [
        {
          title: "HO1",
          name: "丸木戸　聖悟(まるきど　せいご)",
          pl: "zenon",
          charaId: "4300917",
          islost: false
        },
        {
          title: "HO2",
          name: "大隅　菊代(おおすみ　きくよ)",
          pl: "ハム",
          charaId: "4292292",
          islost: false
        },
        {
          title: "HO3",
          name: "田　万次郎（じょん　まんじろう）",
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
