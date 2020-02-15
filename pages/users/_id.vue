<template>
  <div>
    <p>User: {{ user.name }}</p>
    <v-btn color="primary" nuxt to="/users">{{ buttonText }}</v-btn>
  </div>
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
