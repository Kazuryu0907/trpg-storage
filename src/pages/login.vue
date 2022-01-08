<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
        <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
        <v-form @submit.prevent="submit">
            <v-text-field prepend-icon="mdi-lock" label="password" v-model="password"/>
            <b-alert v-if="!isAuth && count != 0" show variant="danger">パスワードが違います!</b-alert>
            <v-card-actions>
                <v-btn class="warning" @click="submit">Login</v-btn>
            </v-card-actions>
        </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import {createHash} from 'crypto'

const encryptSha256 = (str) => {
    const hash = createHash('sha256');
    hash.update(str);
    return hash.digest("hex");
}


export default {
    data() {
        return {
            count: 0,
            password: "",
        }
    },
    methods: {
        submit(){
            let hashed = encryptSha256(this.password);
            localStorage.setItem('password',hashed);
            this.$store.commit("changepass",hashed);
            if(this.$route.query.redirect == undefined){
                this.$route.query.redirect = "/"
            }
            console.log(this.$route.query.redirect);
            this.$router.push(this.$route.query.redirect);
            this.count++;
        },

    },
    computed: {
        isAuth(){
            return this.$store.getters.isAuth
        }
    }
};
</script>
