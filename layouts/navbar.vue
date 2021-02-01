<template>
  <v-app dark>
    <v-card flat height="200px" tile max-height="80px">
      <v-toolbar color="red darken-2 white--text">
        <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

        <v-toolbar-title> Nuxt practice </v-toolbar-title>

        <v-spacer></v-spacer>
        <nuxt-link to="/">
          <v-btn color="green lighten-1 white--text">Home </v-btn>
        </nuxt-link>
        <nuxt-link to="/about">
          <v-btn color="green lighten-1 white--text"> About </v-btn>
        </nuxt-link>
        <nuxt-link to="/others">
          <v-btn color="green lighten-1 white--text"> Others </v-btn>
        </nuxt-link>
        <v-btn color="success" to="/blogs"> Blogs </v-btn>
        <v-btn color="success" to="/inspire"> Inspire </v-btn>
        <v-btn color="success" to="/weather-app"> Weather-App </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <div><nuxt /></div>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped></style>
