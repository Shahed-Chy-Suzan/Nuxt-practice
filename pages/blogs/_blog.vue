<template>
  <div>
    <h1>I am a Single BLOG POST</h1>
    <h3>parameter after http://localhost:3000/blogs/ is {{ post.blog }}</h3>
    <br />
    <p>
      if we want to make parameter validation like: we only take the
      numerical_value/digit only after the http://localhost:3000/blogs/ , thats
      mean if we give a route like http://localhost:3000/blogs/blahBlah then it
      will show error page && if we give http://localhost:3000/blogs/493 it will
      take this route...... So for this this we have to write a code using
      validate() function into export default before data(). <br />
      validate({ params }) { return /^\d+$/.test(params.blog) },
    </p>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
  validate({ params }) {
    return /^\d+$/.test(params.blog)
  },
  data() {
    return {
      post: this.$route.params,
    }
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(this.$route.params) // for catching the parameter
  },
}
</script>

<style scoped></style>
