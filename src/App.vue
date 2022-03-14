<template>
  <v-app>
    <v-main>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <router-link to="/">
            <b-nav-item to="/">TRPGｻﾞｧﾊﾞｧ</b-nav-item>
          </router-link>
          <b-nav-item class="ml-8" @click="daice">Daice解析</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="edit">新規作成orEdit</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
      <div class="bg">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    edit(){
      this.$router.push({path: "/if",query:{id:this.$route.query.id}})
    },
    daice(){
      this.$router.push({path: "/daice"});
    }
  }
};
</script>