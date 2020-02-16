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
/* eslint-disable */
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
            (client.name ? client.name.toLowerCase().includes(this.search.toLowerCase()) : false) ||
            (client.title ? client.title.toLowerCase().includes(this.search.toLowerCase()) : false) ||
            (client.quote ? client.quote.toLowerCase().includes(this.search.toLowerCase()) : false) ||
            (client.nationality ? client.nationality.toLowerCase().includes(this.search.toLowerCase()) : false)
          return res
        } else {
          return this.$store.state.clients
        }
      })
    }
  }
}
</script>
