<template>
  <v-app>
    <v-main class="blue lighten-4">
      <v-toolbar color="indigo" dark>
        <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
        <v-toolbar-title color="white">
          <v-btn to="/" color="transparent">Learning Nuxt</v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn to="/weather-app" color="red">Weather App</v-btn>
          <v-btn to="/others" color="success">Others</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <transition>
        <nuxt />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
