<template>
  <v-list-item :to="`/users/${user.id}`">
    <v-list-item-content>
      <v-list-item-title v-html="user.name" />
      <v-list-item-subtitle v-text="user.title" />
    </v-list-item-content>
    <v-list-item-avatar :size="40">
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
    </v-list-item-avatar>
  </v-list-item>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
