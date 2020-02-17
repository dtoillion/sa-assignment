<template>
  <v-list class="py-0">
    <v-list-item>
      <!-- This search would be more testable if it was its own component -->
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
      // a filter inside of a filter is not ideal, however this way of looping through the data will not break if the api should change in the future
      return this.$store.state.clients.filter((client) => {
        if (this.search) {
          const matchesSearch = Object.keys(client).filter((clientInfo) => {
            return client[clientInfo]
              ? client[clientInfo]
                  .toLowerCase()
                  .includes(this.search.toLowerCase())
              : false
          })
          return matchesSearch.length
        } else {
          return this.$store.state.clients
        }
      })
    }
  }
}
</script>
