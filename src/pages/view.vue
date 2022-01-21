<template>
  <childpage
    :title="data.title"
    :youtube="data.youtube"
    :PLs="data.pls"
    :kp="data.kp"
    :carrouselimg="data.carrouselimg"
  />
</template>

<script>
import childpage from "../components/db_child_card.vue";
import firebase from "../firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
export default {
  async created() {
      this.db = getFirestore(firebase);
      const id = this.$route.query.id;
      console.log("id",id)
      getDoc(doc(this.db,"child",id)).then((doc) => {
            const data = doc.data();
            const {PLs:pls,carrouselimg,...obj} = data;
            for(let key of Object.keys(obj)){
                this.data[key] = obj[key];
            }
            this.data.pls = [...pls];
            !carrouselimg ? "" : this.data.carrouselimg = [...carrouselimg];
        })
  },
  data() {
    return {
      db: null,
      data:{
          title: "",
          number: "",
          kp: "",
          youtube: "",
          pls:[],
          carrouselimg: []
      },
    };
  },
  name: "home",
  components: {
    childpage,
  },
};
</script>
