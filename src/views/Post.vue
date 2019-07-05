<template>
  <v-layout class="post my-3">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title>{{post.title}}</v-card-title>
        <v-card-text>{{post.body}}</v-card-text>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

  export default {

    async created() {
      const routerParams = this.$route.params;
      if (routerParams) {
        await this.$store.dispatch('getPost', routerParams.id);
      } else {
        this.$router.push('/')
      }
    },
    data() {
      return {}
    },
    methods: {},
    computed: {
      post: {
        get() {
          return this.$store.state.post
        }
      }
    }
  }

</script>
