<template>
  <v-list min-width="50%">
    <AppClient
      v-for="client in $store.state.clients"
      :key="client.id"
      :client="client"
    />
  </v-list>
</template>

<script>
import AppClient from '../../components/AppClient.vue'

export default {
  components: {
    AppClient
  }
}
</script>
