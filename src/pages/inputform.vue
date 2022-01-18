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
      <b-form-group label="メイン画像(640px*480px)">
        <b-form-file v-model="data.main_img" :state="Boolean(data.main_img)" @change="up($event)" aria-describedby="main_img_feedback"></b-form-file>
        <b-form-invalid-feedback id="main_img_feedback">640px*480pxにしてください</b-form-invalid-feedback>
      </b-form-group>
      <label for="pls">PLたち</label>
      <div v-for="(pl,index) in data.pls" :key="index" :class="[index != 0 ? 'mt-2' : '']">
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
            <b-col><b-form-input placeholder="例）権 秀治" v-model="data.pls[index].pcname" :state="Boolean(data.pls[index].pcname)"></b-form-input></b-col>
          </b-row>
          <b-row>
            <b-col sm="2"><p>ふりがな</p></b-col>
            <b-col><b-form-input placeholder="例）くぉん ひでじ(24)" v-model="data.pls[index].name_yomi" :state="Boolean(data.pls[index].name_yomi)"></b-form-input></b-col>
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
            <b-col><b-form-file placeholder="任意サイズ・でもキャラ同士揃えて" v-model="file1" :state="Boolean(file1)" @change="up_child($event,index)"></b-form-file></b-col>
          </b-row>
        </b-collapse>
      </div>
    </div>
    <hr class="mt-7">
    <b-button class="my-5" @click="log">Submit</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        image: null,
        title: "",
        id: "",
        number: "",
        kp: "",
        main_img: null,
        main_img_meta: null,
        pls: [{
          plname: "",
          pcname: "",
          name_yomi: "",
          url: "",
          islost: "lost",
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
          islost: "lost",
          img: null
      });
    },
    log(){
        console.log(this.data.pls);
    },
    pls_sub() {
      this.data.pls.pop();
    },
    up(e) {
      const file = (e.target.files || e.dataTransfer)[0]
      if(file.type.startsWith("image/")){
        const render = new FileReader();
        render.readAsDataURL(file);
        render.onload = () => {
          const dataURI =  render.result;
          this.data.main_img = dataURI;
        }
      }
    },
    up_child(e,index) {
      console.log(index);
      const file = (e.target.files || e.dataTransfer)[0]
      if(file.type.startsWith("image/")){
        const render = new FileReader();
        render.readAsDataURL(file);
        render.onload = () => {
          const dataURI =  render.result;
          this.data.pls[index].img = dataURI;
        }
      }
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
