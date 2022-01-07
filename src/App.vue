<template>
  <v-app>
    <v-main>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/">TRPGｻﾞｧﾊﾞｧ</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto"
      >
      <b-nav-item href="#">目安箱</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
