<template>
  <div class="text-center mt-15">
    <h1>Error Page - 404</h1>
    <br /><br />
    <h1>Sorry! {{ error.statusCode }}</h1>
    <h2>{{ error.message }}</h2>
    <nuxt-link to="/" color="primary">go to Home</nuxt-link> <br />
    <br />
    <v-btn color="success" to="/others">go back Others-Nabvar file </v-btn>
  </div>
</template>

<script>
export default {
  layout: 'error-layout',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped></style>
