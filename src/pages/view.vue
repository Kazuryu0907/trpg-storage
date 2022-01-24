<template>
  <childpage
    :title="data.title"
    :youtube="data.youtube"
    :PLs="data.pls"
    :kp="data.kp"
    :carrouselimg="data.carrouselimg"
    :musics="data.musics"
  >
    <template v-slot:memo>
      <div class="text-left">
        <a v-if="data.threads.length == 0">誰もいないようです...</a>
        <div v-for="(th,index) in data.threads" :key="th.msg">
        <a>{{index+1}} ：名前:<span style="color: green;display:inline-block;">名無しさん</span>投稿日:{{th.timestamp}}</a>
          <p>{{th.msg}}</p>         
        </div>
      </div>
      <b-form-textarea
        v-model="msg"
        rows="3"
        placeholder="初カキコ...ども..."
        class="mt-10"
      >
      </b-form-textarea>
      <b-button class="mt-2" variant="outline-dark" @click="submit">送信</b-button>
    </template>
  </childpage>
</template>

<script>
import childpage from "../components/db_child_card.vue";
import firebase from "../firebase";
import { getFirestore, doc, getDoc, setDoc} from "firebase/firestore";
export default {
  async created() {
    this.db = getFirestore(firebase);
    const id = this.$route.query.id;
    getDoc(doc(this.db, "child", id)).then((doc) => {
      const data = doc.data();
      const { PLs: pls, carrouselimg, musics, ...obj } = data;
      for (let key of Object.keys(obj)) {
        this.data[key] = obj[key];
      }
      this.data.pls = [...pls];
      this.data.musics = [...musics];
      !carrouselimg ? "" : (this.data.carrouselimg = [...carrouselimg]);
    });
     await this.updateThread();
    
  },
  data() {
    return {
      db: null,
      msg: "",
      data: {
        title: "",
        number: "",
        kp: "",
        youtube: "",
        pls: [],
        carrouselimg: [],
        musics: [],
        threads:[],
      },
    };
  },
  methods: {
      async updateThread(){
    getDoc(doc(this.db,"thread",this.$route.query.id)).then((doc) => {
        const data = doc.data();
        this.data.threads = [...data.threads];
        console.log(this.data.threads);
    })
      },
      async submit(){
          const docRef = await getDoc(doc(this.db,"thread",this.$route.query.id));
          let data = docRef.data();
          if(!data)data = {};
          if(!data.threads)data.threads = [];
          const days = ["日","月","火","水","木","金","土"]
          let date = new Date();
          const day = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate() + `(${days[date.getDay()]})`;
          const hour = String(date.getHours()).padStart(2,"0") + ":" + String(date.getMinutes()).padStart(2,"0") + ":" + String(date.getSeconds()).padStart(2,"0") + "." +(date.getMilliseconds()*0.1).toFixed();
          const timestamp = day + " " + hour;
          console.log(timestamp);
          data.threads.push({timestamp:timestamp,msg:this.msg});
          await setDoc(doc(this.db,"thread",this.$route.query.id),data);
          await this.updateThread();
          this.msg = "";
      }
  },
  name: "home",
  components: {
    childpage,
  },
};
</script>
