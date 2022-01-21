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
          :state="Boolean(data.main_img) || Boolean(data.main_img_url)"
          @change="main_img_change($event)"
          aria-describedby="main_img_feedback"
        ></b-form-file>
        <b-form-invalid-feedback id="main_img_feedback"
          >640px*480pxにしてください</b-form-invalid-feedback
        >
      </b-form-group>
      <b-img
        :src="!data.main_img_src ? data.main_img_url : data.main_img_src"
        width="320"
        height="auto"
      ></b-img>
      <b-form-group label="Youtubeアーカイブ">
        <b-form-input
          v-model="data.youtube"
          placeholder="アーカイブのプレイリストの埋め込みurl"
        ></b-form-input>
      </b-form-group>
        <b-form-group label="上に表示させる画像たち(サイズ自由&複数選択可) .webp" class="mt-8">
          <b-form-file
            accept=".webp"
            multiple
            @change="carrousel_img_change($event)"
          ></b-form-file>
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
                :state="
                  Boolean(data.pls[index].img) ||
                  Boolean(data.pls[index].img_url)
                "
                @change="child_img_change($event, index)"
              ></b-form-file
            ></b-col>
            <b-img
              :src="
                !data.pls[index].img_src
                  ? data.pls[index].img_url
                  : data.pls[index].img_src
              "
              width="100"
              height="auto"
            ></b-img>
          </b-row>
        </b-collapse>
      </div>
    </div>
    <hr class="mt-7" />
    <b-button class="my-5" @click="submit">Submit</b-button>
    <b-modal id="errormodal" title="Error"
      ><p>{{ errormodal_msg }}</p></b-modal
    >
    <b-modal id="successmodal" centered hide-footer title="Success">
      <div class="d-block text-center">
        <p>アップロード完了！</p>
      </div>
      <b-button class="mt-3 ml-3" variant="primary" @click="$router.push('/')"
        >homeへ</b-button
      >
    </b-modal>
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
  getDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const pls = {
  plname: "",
  pcname: "",
  name_yomi: "",
  islost: "lost",
  img: null,
  img_url: null,
  img_src: null,
  url: "", //キャラシ
};

const isNewdata = (newData, oldData) => {
  const { pls: newPLs, ...newMain } = newData;
  const { pls: oldPLs, ...oldMain } = oldData;
  for (let key of Object.keys(newMain)) {
    if (newMain[key] != oldMain[key]) {
      return 1;
    }
    newPLs;
    oldPLs;
  }
  if (newPLs.lenght != oldPLs.lenght) {
    console.log("diff lenght");
    return 1;
  }
};
export default {
  created() {
    this.db = getFirestore(firebase);
    this.storage = getStorage(firebase);
    this.query_id = this.$route.query.id;
    if (this.query_id) {
      getDoc(doc(this.db, "main", this.query_id)).then((docu) => {
        const data = docu.data();
        const { PLs, img, ...arr } = data;
        PLs;
        for (let key of Object.keys(arr)) {
          this.data[key] = data[key];
        }
        //keyが違うため
        this.data["main_img_url"] = img;

        getDoc(doc(this.db, "child", this.query_id)).then((docu) => {
          const data = docu.data();
          const pls = data.PLs;
          const youtube = data.youtube;
          this.data.pls = [...pls];
          this.data.youtube = youtube;
          this.originalData = { ...this.data };
        });
      });
    }
  },
  data() {
    return {
      db: null,
      query_id: null,
      originalData: {},
      storage: null,
      errormodal_msg: "",
      data: {
        title: "",
        id: "",
        number: "",
        kp: "",
        youtube: "",
        main_img: null,
        main_img_url: "",
        main_img_src: null,
        carrouselimg: [],
        carrouselimg_url: [],
        pls: [{ ...pls }],
      },
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
      this.data.main_img_src = URL.createObjectURL(file);
    },
    child_img_change(e, index) {
      const file = e.target.files[0];
      this.data.pls[index].img = file;
      this.data.pls[index].img_src = URL.createObjectURL(file);
    },
    carrousel_img_change(e) {
      this.data.carrouselimg = [];
      for (let file of e.target.files) {
        this.data.carrouselimg.push(file);
      }
    },
    test() {
      getDocs(collection(this.db, "posts")).then((snap) => {
        snap.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
        });
      });
    },
    async isexistsid(id) {
      const itemRef = doc(this.db, "main", id);
      const snap = await getDoc(itemRef);
      return snap.exists();
    },
    createTask(Ref, file, callback) {
      return new Promise((resolve) => {
        const meta = { contentType: "image/webp" };
        if (!file) {
          return resolve();
        }
        console.log("file", file);
        uploadBytesResumable(Ref, file, meta).then((snap) => {
          getDownloadURL(snap.ref).then((url) => {
            callback(url);
            return resolve();
          });
        });
      });
    },
    showerror(msg) {
      this.errormodal_msg = msg;
      this.$bvModal.show("errormodal");
    },
    isfieldfull(data) {
      const { id, title, number, kp, main_img, main_img_url, pls } = data;
      if (!(id && title && number && kp && (main_img || main_img_url))) {
        this.showerror("メイン関係が埋まってない！");
        return null;
      }
      for (let pl of pls) {
        if (
          !(
            pl.plname &&
            pl.pcname &&
            pl.name_yomi &&
            pl.islost &&
            (pl.img || pl.img_url)
          )
        ) {
          this.showerror("PL関係が埋まってない！");
          return null;
        }
      }
      return 1;
    },
    async submit() {
      const { id, title, number, youtube, kp, main_img, pls } = this.data;
      const DEBUG = false;

      const isexest = await this.isexistsid(id);
      //idが被っていないか
      if (isexest && !this.query_id) {
        this.showerror("idが被ってます！");
        return;
      }
      //フィールドが埋まっているか
      if (!this.isfieldfull(this.data)) {
        return;
      }

      let path = `main/${id}/main.webp`;
      const task = this.createTask(ref(this.storage, path), main_img, (url) => {
        this.data.main_img_url = url;
      });
      isNewdata(this.data, this.originalData);
      DEBUG
        ? ""
        : task
            .then(() => {
              const storedata_main = {
                title: title,
                img: this.data.main_img_url,
                kp: kp,
                number: number,
                id: id,
                PLs: pls.map((pl) => pl.plname),
              };
              setDoc(doc(this.db, "main", id), storedata_main);

              // child_img
              let PromiseArray = [];
              this.data.pls.forEach((pl, index) => {
                let path = `child/${id}/${index + 1}.webp`;
                let callback = (url) => {
                  this.data.pls[index].img_url = url;
                };
                PromiseArray.push({
                  ref: ref(this.storage, path),
                  file: pl.img,
                  func: callback,
                });
              });
              Promise.all(
                PromiseArray.map((pa) =>
                  this.createTask(pa.ref, pa.file, pa.func)
                )
              ).then(() => {
                let carrouselArray = [];
                this.data.carrouselimg.forEach((file, index) => {
                  let path = `carrousel/${id}/${index + 1}.webp`;
                  let callback = (url) => {
                    this.data.carrouselimg_url[index] = url;
                  };
                  carrouselArray.push({
                    ref: ref(this.storage, path),
                    file: file,
                    func: callback,
                  });
                });
                Promise.all(
                  carrouselArray
                    .map((pa) => this.createTask(pa.ref, pa.file, pa.func)))
                    .then(() => {
                      const storedata = {
                        title: title,
                        number: number,
                        id: id,
                        youtube: youtube,
                        kp: kp,
                        carrouselimg: this.data.carrouselimg_url,
                        PLs: this.data.pls.map((pl) => {
                          const { img, img_src,...senddata} = pl;img_src;
                          img;
                          return senddata;
                        }),
                      };
                      setDoc(doc(this.db, "child", id), storedata);
                    })
                
              });
              this.$bvModal.show("successmodal");
            })
            .catch((err) => {
              this.showerror(err);
              return;
            });
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
div {
  font-family: "Noto Sans Japanese", sans-serif;
  font-display: swap;
}

.sample {
  color: #ffab91;
  text-shadow: 0.02em 0.02em 0.02em rgb(0, 0, 0, 1);
}
</style>
