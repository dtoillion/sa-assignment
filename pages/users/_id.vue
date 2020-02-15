<template>
  <div>
    <AppUser :user="user" :clickable="false" />
    <v-btn color="primary" nuxt to="/users">{{ buttonText }}</v-btn>
  </div>
</template>

<script>
import AppUser from '../../components/AppUser.vue'

export default {
  components: {
    AppUser
  },
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
