<template>
    <div>
        <h2 class="mb-4 mt-5 font-weight-bold sample">入力フォーム</h2>
        <b-form-file
            v-model="file1"
            :state="Boolean(file1)"
            @change="up"
            ></b-form-file>
            {{file1}}
        <input type="file" @change="uploaded"/>
        <b-img :src="this.data.img" />
    </div>
</template>

<script>
export default({
    data(){
        return {
            data: {
                image: null,
            },
            file1: null
        }
    },
    methods: {
        up(){
            this.createimage(this.file1)
            console.log(this.file1)
        },
        uploaded(e){
            const img = e.target.files[0]
            this.createimage(img)
            console.log(this.data.image)
        },
        createimage(img) {
            const reader = new FileReader()
            reader.readAsDataURL(img)
            reader.onload = () => {
                this.data.image = reader.result
            }
        }
    }
})
</script>

<style>
@import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
div{
    font-family: "Noto Sans Japanese", sans-serif;
}
.w100 {font-weight: 100;}
.w200 {font-weight: 200;}
.w300 {font-weight: 300;}
.w400 {font-weight: 400;}
.w500 {font-weight: 500;}
.w700 {font-weight: 700;}
.w900 {font-weight: 900;}

.sample {
    color: #FFAB91;
    text-shadow: 0.02em 0.02em 0.02em rgb(0,0,0,1);
}
</style>