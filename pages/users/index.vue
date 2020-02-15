<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1>All Users:</h1>
      <div v-for="user in $store.state.users" :key="user.id">
        <nuxt-link :to="`/users/${user.id}`">
          {{ user.id }}
          {{ user.name }}
        </nuxt-link>
        {{ user.title }}
        {{ user.quote }}
      </div>
    </v-flex>
    <nuxt-child />
  </v-layout>
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
