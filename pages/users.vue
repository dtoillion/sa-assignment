<template>
  <div>
    <v-layout column justify-center align-center>
      <nuxt-child />
    </v-layout>
  </div>
</template>

<script>
export default {
  async fetch({ $axios, store }) {
    const response = await $axios.get('clients.json')
    const users = response.data
    store.commit('SET_USERS', users)
  }
}
</script>
