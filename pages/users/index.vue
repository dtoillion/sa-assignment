<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h1>All Users:</h1>
      <v-list>
        <AppUser
          v-for="user in $store.state.users"
          :key="user.id"
          :user="user"
          :clickable="true"
        />
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import AppUser from '../../components/AppUser.vue'

export default {
  components: {
    AppUser
  },
  async fetch({ $axios, store }) {
    const response = await $axios.get('clients.json')
    const users = response.data
    store.commit('SET_USERS', users)
  }
}
</script>
