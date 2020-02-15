<template>
  <v-list-item :to="clickable ? `/users/${user.id}` : ``">
    <v-list-item-content>
      <v-list-item-title v-text="user.name"></v-list-item-title>
      <v-list-item-subtitle v-text="user.title"></v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-avatar>
      <v-img :src="user.avatar"></v-img>
    </v-list-item-avatar>
  </v-list-item>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    },
    clickable: Boolean
  }
}
</script>
