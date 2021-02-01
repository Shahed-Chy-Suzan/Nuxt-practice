<template>
  <div>
    <v-container>
      <h1 class="deep-purple darken-2 white--text px-3">
        Hello! This is OTHERS page.
      </h1>
      <div class="d-block pa-2 deep-purple accent-4 white--text">d-block</div>
      <div class="d-block pa-2 black white--text">d-block</div>
      <div class="red">hello</div>
      <div class="pa-2 yellow">d-block</div>
      <v-spacer />
      <v-btn> Continue </v-btn>
    </v-container>

    <div class="text-center">
      <v-btn class="mx-2" fab dark small color="primary">
        <v-icon dark> mdi-minus </v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark small color="pink">
        <v-icon dark> mdi-heart </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
}
</script>

<style scoped></style>
