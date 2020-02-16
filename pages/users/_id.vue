<template>
  <v-card shaped min-width="60%">
    <div class="d-flex flex-no-wrap justify-space-between pa-4">
      <div>
        <v-card-title class="headline" v-html="user.name" />
        <v-card-subtitle v-text="user.title" />
        <v-card-text>
          <h3 v-if="user.quote">{{ user.quote }}</h3>
        </v-card-text>
      </div>
      <div class="d-flex flex-column align-center">
        <v-avatar class="mb-3" size="128" right>
          <v-img :src="user.avatar">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  size="40"
                  color="primary"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-avatar>
        <v-sheet
          v-if="user.nationality"
          elevation="6"
          color="info"
          class="pa-1 overline"
        >
          {{ user.nationality }}
        </v-sheet>
      </div>
    </div>
    <v-divider />
    <v-card-actions class="pa-4">
      <v-btn class="mx-auto" color="primary" to="/users" nuxt>
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
    user() {
      return this.$store.state.users.find((u) => u.id === this.$route.params.id)
    }
  }
}
</script>
