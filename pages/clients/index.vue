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
          const res =
            client.name.toLowerCase().includes(this.search.toLowerCase()) ||
            client.title.toLowerCase().includes(this.search.toLowerCase()) ||
            client.quote.toLowerCase().includes(this.search.toLowerCase()) ||
            client.nationality.toLowerCase().includes(this.search.toLowerCase())
          return res
        } else {
          return this.$store.state.clients
        }
      })
    }
  }
}
</script>
