<template>
  <v-layout>
    <v-flex class="text-center">
      <p>Users page will go here...</p>
      <v-btn color="primary" nuxt to="/">{{ buttonText }}</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    buttonText: 'Go back'
  })
}
</script>
