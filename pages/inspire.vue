<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <div>
        <br />
        <nuxt-link to="/"> Go back to Home Page </nuxt-link>
      </div>
      <div class="d-block pa-2 deep-purple accent-4 white--text">d-block</div>
      <div class="d-block pa-2 black white--text">d-block</div>
      <br /><br />
      <div>
        <h2>Use of Nuxt link</h2>
        <p>
          <nuxt-link to="/">Home</nuxt-link>
          <n-link to="/inspire">Inspire</n-link>
          <NLink to="/">Home</NLink>
          <NuxtLink to="/others">Others</NuxtLink>

          <v-btn color="red" to="/blogs"> Blogs </v-btn>
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'inspireNav',
}
</script>
