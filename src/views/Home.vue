<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <p>The following message was fetched from the <code>hello</code> lambda function located in <code>/src/lambda/hello.js</code></p>

    <hr>

    <pre v-if="loading">LOADING...</pre>
    <pre v-else>{{msg}}</pre>

    <hr>

    An example app by <a href="https://github.com/aeksco" target="_blank">@aeksco</a>
    <br>
    Source code available on <a href="https://github.com/aeksco/vue-netlify-lambda-prerender" target="_blank">GitHub</a>

  </div>
</template>

<script>
export default {
  name: 'home',
  mounted () {
    this.$store.dispatch('fetchMessage')
  },
  computed: {
    msg () {
      return this.$store.state.msg
    },
    loading () {
      return this.$store.state.loading
    }
  }
}
</script>
