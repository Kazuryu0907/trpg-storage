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
            src:require("@/imgs/mafia1/C1.webp")
        },{
            src:require('@/imgs/mafia1/C2.webp')
        }
      ],
      title: "マフィア珍道中",
      youtube: "https://www.youtube.com/embed/ASAgSn5oQKg",
      img: "require('@/imgs/mafia1/main.webp')",
      linkto: "/mafia1",
      kp: "鋼鉄",
      PLs: [
        {
          title: "HO1",
          name: "利　大学",
          name_yomi: "り　だいがく(24)",
          pl: "kazuryu",
          charaId: "4292396",
          islost: false
        },
        {
          title: "HO2",
          name: "向原　八雲",
          name_yomi: "むこうばら　やくも(12)",
          pl: "zenon",
          charaId: "-",
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
