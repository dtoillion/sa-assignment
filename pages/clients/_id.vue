<template>
  <v-card shaped>
    <div class="d-flex flex-no-wrap justify-space-between pa-4">
      <div>
        <v-card-title class="headline" v-html="client.name" />
        <v-card-subtitle v-text="client.title" />
        <v-card-text>
          <h3 v-if="client.quote">{{ client.quote }}</h3>
        </v-card-text>
      </div>
      <div class="d-flex flex-column align-center">
        <v-avatar class="mb-3" size="128" right>
          <v-img :src="client.avatar">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate size="40" color="primary" />
              </v-row>
            </template>
          </v-img>
        </v-avatar>
        <v-sheet
          v-if="client.nationality"
          elevation="6"
          color="info"
          class="pa-1 overline"
        >
          {{ client.nationality }}
        </v-sheet>
      </div>
    </div>
    <v-divider />
    <v-card-actions class="pa-4">
      <v-btn class="mx-auto" color="primary" to="/clients" nuxt>
        {{ buttonText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      buttonText: 'Go back'
    }
  },
  computed: {
    client() {
      return this.$store.state.clients.find(
        (u) => u.id === this.$route.params.id
      )
    }
  }
}
</script>
