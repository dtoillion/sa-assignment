<template>
  <v-list class="py-0">
    <v-list-item>
      <v-text-field
        v-model="search"
        placeholder="Search for client..."
        clearable
        color="primary"
      />
    </v-list-item>
    <AppClient
      v-for="client in filteredClients"
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
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    filteredClients() {
      return this.$store.state.clients.filter((client) => {
        if (this.search) {
          return client.name.toLowerCase().includes(this.search.toLowerCase())
        } else {
          return this.$store.state.clients
        }
      })
    }
  }
}
</script>
