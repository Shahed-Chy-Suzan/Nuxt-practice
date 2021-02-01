<template>
  <div>
    <h1>hey! here checking your are in Offline or Online</h1>
    <p v-if="$nuxt.isOffline" class="danger--text">
      Opps!!! You are...OFFLINE.
    </p>
    <p v-if="$nuxt.isOnline" class="success--text">
      Yeehhh!!! You are...ONLINE.
    </p>
    <v-divider class="indigo"></v-divider>

    <h1>Using_asyncData_to_fetch_data_from_an_API_with_Nuxt</h1>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
