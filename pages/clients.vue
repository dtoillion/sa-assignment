<template>
  <v-layout>
    <v-flex xs12 sm8 md6 xl4 class="mx-auto">
      <nuxt-child />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  async fetch({ $axios, store }) {
    const response = await $axios.get('clients.json')
    const clients = response.data
    store.commit('SET_CLIENTS', clients)
  }
}
</script>
