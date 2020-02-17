<template>
  <v-layout>
    <v-flex xs12 sm8 md6 xl4 class="mx-auto">
      <nuxt-child />
    </v-flex>
  </v-layout>
</template>

<script>
// This component initialized the store and makes the client data available to it's children
// In a more complicated app I think this would be better off as a middleware if SSR, or in a data component for SPA
export default {
  async fetch({ $axios, store }) {
    try {
      const response = await $axios.get('clients.json')
      const clients = response.data
      store.commit('SET_CLIENTS', clients)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
