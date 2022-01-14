<template>
  <v-app>
    <v-main>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <router-link to="/">
            <b-nav-item to="/">TRPGｻﾞｧﾊﾞｧ</b-nav-item>
          </router-link>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="logout">Logout</b-nav-item>
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
    logout(){
      this.$store.commit('clearpass')
      this.$router.push("/login")
    }
  }
};
</script>