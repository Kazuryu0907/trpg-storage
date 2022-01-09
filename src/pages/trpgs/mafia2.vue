<template>
  <childpage :title="title" :img="img" :linkto="linkto" :youtube="youtube" :PLs="PLs" :carrouselimg="carrouselimg" :kp="kp">
      <template v-slot:memo>
          <v-row>
              <v-col>
          <a href="https://www.youtube.com/watch?v=KpecRLkALd4"><b-icon icon="youtube" scale="1"/>アーカイブ１</a>
              </v-col>
              <v-col>
                  <a href="https://youtu.be/aSwDHENkapo"><b-icon icon="youtube" scale="1"/>アーカイブ２</a>
              </v-col>
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
            src:require("@/imgs/mafia2/C1.webp")
        },{
            src:require('@/imgs/mafia2/C2.webp')
        }
      ],
      title: "マフィア珍道中",
      img: "require('@/imgs/mafia2/main.webp')",
      linkto: "/mafia2",
      youtube: "https://www.youtube.com/embed/KpecRLkALd4",
      kp: "鋼鉄",
      PLs: [
        {
          title: "HO1",
          name: "凩　九呂",
          name_yomi: "こがらし　くろ",
          pl: "ハム",
          charaId: "4294159",
          islost: false
        },
        {
          title: "HO2",
          name: "緑簾　牡丹",
          name_yomi: "りょくれん　ぼたん",
          pl: "朔間　棗",
          charaId: "4294202",
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
