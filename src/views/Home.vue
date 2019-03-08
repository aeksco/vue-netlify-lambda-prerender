<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <p>The following message was fetched from the <code>hello</code> lambda function located in <code>/src/lambda/hello.js</code></p>

    <hr>

    <pre v-if="loading">LOADING...</pre>
    <pre v-else>{{msg}}</pre>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
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
