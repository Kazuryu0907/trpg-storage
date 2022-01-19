<template>
  <div>
    <h2 class="mb-4 mt-5 font-weight-bold sample">入力フォーム</h2>
    <div class="w-50 mx-auto text-left">
      <b-form-group label="タイトル">
        <b-form-input
          v-model="data.title"
          placeholder="例）異能警察"
          :state="Boolean(data.title)"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="識別id">
        <b-form-input
          v-model="data.id"
          placeholder="例）inou1(英字+数字)"
          :state="Boolean(data.id)"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="第n陣">
        <b-form-input
          v-model="data.number"
          placeholder="例）1"
          type="number"
          :state="Boolean(data.number)"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="KP">
        <b-form-input
          v-model="data.kp"
          placeholder="例）鋼鉄"
          :state="Boolean(data.kp)"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="メイン画像(640px*480px) .webp">
        <b-form-file
          accept=".webp"
          :state="Boolean(data.main_img)"
          @change="main_img_change($event)"
          aria-describedby="main_img_feedback"
        ></b-form-file>
        <b-form-invalid-feedback id="main_img_feedback"
          >640px*480pxにしてください</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group label="Youtubeアーカイブ">
        <b-form-input
          v-model="data.url"
          placeholder="アーカイブのプレイリストの埋め込みurl"
          :state="Boolean(data.url)"
        ></b-form-input>
      </b-form-group>
      <label for="pls">PLたち</label>
      <div
        v-for="(pl, index) in data.pls"
        :key="pl.name"
        :class="[index != 0 ? 'mt-2' : '']"
      >
        <b-form inline>
          <b-form-input
            class="mt-2"
            :placeholder="'HO' + (index + 1)"
            v-model="data.pls[index].plname"
            :state="Boolean(data.pls[index].plname)"
          ></b-form-input>
          <b-button
            v-b-toggle="'plcol' + index"
            variant="outline-success"
            class="ml-3"
            ><b-icon-arrow-down></b-icon-arrow-down
          ></b-button>
          <b-button
            v-if="index == data.pls.length - 1"
            variant="outline-dark"
            class="ml-10"
            @click="pls_pls"
            ><b-icon-plus></b-icon-plus
          ></b-button>
          <b-button
            v-if="index == data.pls.length - 1 && index != 0"
            variant="outline-dark"
            class="ml-3"
            @click="pls_sub"
            ><b-icon-dash></b-icon-dash
          ></b-button>
        </b-form>
        <b-collapse :id="'plcol' + index" class="text-center ml-auto mt-3">
          <b-row>
            <b-col sm="2"><p>PC名</p></b-col>
            <b-col
              ><b-form-input
                placeholder="例）権 秀治"
                v-model="data.pls[index].pcname"
                :state="Boolean(data.pls[index].pcname)"
              ></b-form-input
            ></b-col>
          </b-row>
          <b-row>
            <b-col sm="2"><p>ふりがな</p></b-col>
            <b-col
              ><b-form-input
                placeholder="例）くぉん ひでじ(24)"
                v-model="data.pls[index].name_yomi"
                :state="Boolean(data.pls[index].name_yomi)"
              ></b-form-input
            ></b-col>
          </b-row>
          <b-row>
            <b-col sm="2"><p class="mt-1">キャラシートURL</p></b-col>
            <b-col
              ><b-form-input
                placeholder="例）https://charasheet.vampire-blood.net/4281236"
                v-model="data.pls[index].url"
                :state="Boolean(data.pls[index].url)"
              ></b-form-input
            ></b-col>
          </b-row>
          <b-row>
            <b-col sm="2"><p class="mt-1">ロスト</p></b-col>
            <b-col
              ><b-form-radio-group v-model="data.pls[index].islost">
                <b-form-radio value="lost" class="mr-5">ロスト</b-form-radio>
                <b-form-radio value="surv" class="ml-5">生還</b-form-radio>
              </b-form-radio-group></b-col
            >
          </b-row>
          <b-row>
            <b-col sm="2"><p class="mt-1">キャラ画像</p></b-col>
            <b-col
              ><b-form-file
                accept=".webp"
                placeholder="任意サイズ・でもキャラ同士揃えて"
                :state="Boolean(data.pls[index].img)"
                @change="child_img_change($event, index)"
              ></b-form-file
            ></b-col>
          </b-row>
        </b-collapse>
      </div>
    </div>
    <hr class="mt-7" />
    <b-button class="my-5" @click="submit">Submit</b-button>
    <b-modal id="errormodal" title="Error"><p>{{errormodal_msg}}</p></b-modal>
  </div>
</template>

<script>
import firebase from "../firebase";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import imageCompression from "browser-image-compression";

let pls = {
  plname: "",
  pcname: "",
  name_yomi: "",
  islost: "lost",
  img: null,
  img_url: null,
};

export default {
  created() {
    this.db = getFirestore(firebase);
    this.storage = getStorage(firebase);
  },
  data() {
    return {
      db: null,
      storage: null,
      errormodal_msg: "",
      data: {
        image: null,
        title: "",
        id: "test1",
        number: "",
        kp: "",
        youtube: "",
        main_img: null,
        main_img_url: "",
        pls: [{ ...pls }],
      },
      file1: null,
    };
  },
  methods: {
    pls_pls() {
      this.data.pls.push({ ...pls });
    },
    log() {
      console.log(this.data);
    },
    pls_sub() {
      this.data.pls.pop();
    },
    main_img_change(e) {
      const file = e.target.files[0];
      this.data.main_img = file;
    },
    child_img_change(e, index) {
      const file = e.target.files[0];
      this.data.pls[index].img = file;
    },
    async compimg(file) {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1000,
      };
      return await imageCompression(file, options);
    },
    test() {
      getDocs(collection(this.db, "posts")).then((snap) => {
        snap.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
        });
      });
    },
    uploaddata(path, file, callback) {
      const Ref = ref(this.storage, path);
      const uploadTask = uploadBytesResumable(Ref, file, {
        contentType: "image/webp",
      });
      uploadTask.on("state_changed", () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          callback(url);
        });
      });
    },
    submit() {
      // main_img
      if (!this.data.id) {
        return;
      }
      const {id,title,number,kp,main_img,pls} = this.data;
      if(!(id && title && number && kp && main_img)){
        this.errormodal_msg = "メイン関係が埋まってない！"
        this.$bvModal.show("errormodal");
        return;
      }
      for(let pl of pls){
        if(!(pl.plname && pl.pcname && pl.name_yomi && pl.islost && pl.img)){
          this.errormodal_msg = "PL関係が埋まってない！"
          this.$bvModal.show("errormodal")
          return;
        }
      }
      let path = `main/${id}/main.webp`;
      this.uploaddata(path, this.data.main_img, (url) => {
        // store
        const storedata = {
              title: this.data.title,
              img: url,
              kp: this.data.kp,
              number: this.data.number,
              id: this.data.id,
              PLs: this.data.pls.map((pl) => {
                return pl.plname;
              }),
            };
        setDoc(doc(this.db, "main", id), storedata);
      });
      // child_img
      Promise.all(
        this.data.pls.map(async (pl, index) => {
          await new Promise((resolve) =>
            this.uploaddata(`child/${id}/${index + 1}.webp`, pl.img, (url) => {
              this.data.pls[index].img_url = url;
              resolve();
            })
          );
        })
      ).then(() => {
        const storedata = {
          title: this.data.title,
          number: this.data.number,
          id: this.data.id,
          youtube: this.data.youtube,
          kp: this.data.kp,
          PLs: this.data.pls.map((pl) => {
            const {plname,pcname,name_yomi,islost,img_url} = pl;
            return {plname,pcname,name_yomi,islost,img_url};
          })
        }
        setDoc(doc(this.db,"child",id),storedata);
      });

      this.$router.push("/");
    },
  },
};
</script>

<style>
@import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
div {
  font-family: "Noto Sans Japanese", sans-serif;
}

.sample {
  color: #ffab91;
  text-shadow: 0.02em 0.02em 0.02em rgb(0, 0, 0, 1);
}
</style>
