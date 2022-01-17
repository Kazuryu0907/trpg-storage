<template>
  <div>
    <h2 class="mb-4 mt-5 font-weight-bold sample">入力フォーム</h2>
    <div class="w-50 mx-auto text-left">
      <b-form-group label="タイトル">
        <b-form-input
          v-model="data.title"
          placeholder="例）異能警察"
          id="title"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="第n陣">
        <b-form-input
          v-model="data.number"
          placeholder="例）1"
          id="number"
          type="number"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="KP">
        <b-form-input v-model="data.kp" placeholder="例）鋼鉄"> </b-form-input>
      </b-form-group>
      <label for="pls">PLたち</label>
      <div v-for="(pl,index) in data.pls" :key="index" :class="[index != 0 ? 'mt-2' : '']">
        <b-form inline>
          <b-form-input
            class="mt-2"
            :placeholder="'HO' + (index + 1)"
            v-model="data.pls[index].plname"
          ></b-form-input>
          <b-button
            v-b-toggle="'plcol' + index"
            variant="outline-success"
            class="ml-3"
            ><b-icon-arrow-down></b-icon-arrow-down></b-button>
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
            <b-col><b-form-input placeholder="例）権 秀治" v-model="data.pls[index].pcname"></b-form-input></b-col>
          </b-row>
          <b-row>
            <b-col sm="2"><p>ふりがな</p></b-col>
            <b-col><b-form-input placeholder="例）くぉん ひでじ(24)" v-model="data.pls[index].name_yomi"></b-form-input></b-col>
          </b-row>
          <b-row>
            <b-col sm="2"><p class="mt-1">キャラシートURL</p></b-col>
            <b-col><b-form-input placeholder="例）https://charasheet.vampire-blood.net/4281236" v-model="data.pls[index].url"></b-form-input></b-col>
          </b-row>
          <b-row>
            <b-col sm="2"><p class="mt-1">ロスト</p></b-col>
            <b-col><b-form-radio-group v-model="data.pls[index].islost">
                <b-form-radio value="lost" class="mr-5">ロスト</b-form-radio>
                <b-form-radio value="surv" class="ml-5">生還</b-form-radio>
                </b-form-radio-group></b-col>
          </b-row>
          <b-row>
            <b-col sm="2"><p class="mt-1">キャラ画像</p></b-col>
            <b-col><b-form-file v-model="file1" :state="Boolean(file1)" @change="up"></b-form-file></b-col>
          </b-row>
        </b-collapse>
      </div>
    <b-button @click="log"></b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        image: null,
        title: "",
        number: "",
        kp: "",
        pls: [{
          plname: "",
          pcname: "",
          name_yomi: "",
          url: "",
          islost: false,
          img: null
      }],
      },
      file1: null,
    };
  },
  methods: {
    pls_pls() {
      this.data.pls.push({
          plname: "",
          pcname: "",
          name_yomi: "",
          url: "",
          islost: false,
          img: null
      });
    },
    log(){
        console.log(this.data.pls);
    },
    pls_sub() {
      this.data.pls.pop();
    },
    up() {
      this.createimage(this.file1);
      console.log(this.file1);
    },
    uploaded(e) {
      const img = e.target.files[0];
      this.createimage(img);
      console.log(this.data.image);
    },
    createimage(img) {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        this.data.image = reader.result;
      };
    },
  },
};
</script>

<style>
@import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
div {
  font-family: "Noto Sans Japanese", sans-serif;
}
.w100 {
  font-weight: 100;
}
.w200 {
  font-weight: 200;
}
.w300 {
  font-weight: 300;
}
.w400 {
  font-weight: 400;
}
.w500 {
  font-weight: 500;
}
.w700 {
  font-weight: 700;
}
.w900 {
  font-weight: 900;
}

.sample {
  color: #ffab91;
  text-shadow: 0.02em 0.02em 0.02em rgb(0, 0, 0, 1);
}
</style>
