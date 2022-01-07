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
            src:require("@/imgs/yoi1/C2.webp")
        }
      ],
      title: "宵闇の嘘",
      img: "require('@/imgs/yoi1/main.webp')",
      linkto: "/yoi1",
      youtube: "",
      kp: "ハム？",
      PLs: [
        {
          title: "HO1",
          name: "加藤　興毅",
          name_yomi: "かとう　こうき(28)",
          pl: "ワシントン",
          charaId: "4282476",
          islost: false
        },
        {
          title: "HO2",
          name: "絵本　油梨",
          name_yomi: "えもと　ゆり(32)",
          pl: "らむね",
          charaId: "4282623",
          islost: false
        },
        {
          title: "HO3",
          name: "権　秀治",
          name_yomi: "くぉん　ひでじ(24)",
          pl: "kazuryu",
          charaId: "4281236",
          islost: false
        },
        {
          title: "HO4",
          name: "早乙女　椿",
          name_yomi: "さおとめ　つばき(25)",
          pl: "綾鷹",
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
