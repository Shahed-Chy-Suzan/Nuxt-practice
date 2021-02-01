<template>
  <div>
    <v-container>
      <h1>Hello About Page</h1>
      <br />
      <div>{{ about2 }}</div>
      <div>
        <h2>Use of Nuxt link</h2>
        <p>
          <nuxt-link to="/">Home</nuxt-link>
          <n-link to="/inspire">Inspire</n-link>
          <NLink to="/">Home</NLink>
          <NuxtLink to="/others">Others</NuxtLink>
        </p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      about2:
        '-- asyncData thee likle ta ei file ta load howar aghei data gula load korbe, Eita asyncData theke show hocche.',
    }
  },
  // data() {
  //   return {
  //     about1:
  //       '-- data thee likle ta ei file ta load howar por data gula load korbe, Eita data theke show hocche.',
  //   }
  // },
  head() {
    return {
      title: 'About Page Title',
      script: [{ src: '/about.js' }],
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description for ABOUT page',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
