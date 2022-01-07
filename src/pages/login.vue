<template>
  <v-card width="400px" class="mx-auto mt-5">
    <v-card-title>
        <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
        <v-form>
            <v-text-field prepend-icon="mdi-lock" label="password" v-model="password"/>
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
            password: "",
        }
    },
    methods: {
        submit(){
            let hashed = encryptSha256(this.password);
            if(hashed == "23196c9c0be87f9e134d64732d7c291943acfd16d1778d5d0226658387759ef7"){
                console.log("success!");
            }else{
                console.log(hashed);
            }
        }
    }
};
</script>
