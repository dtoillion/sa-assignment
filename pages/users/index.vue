<template>
  <v-list min-width="60%">
    <AppUser v-for="user in $store.state.users" :key="user.id" :user="user" />
  </v-list>
</template>

<script>
import AppUser from '../../components/AppUser.vue'

export default {
  components: {
    AppUser
  }
}
</script>
