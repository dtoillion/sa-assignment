<template>
  <v-list-item :to="`/clients/${client.id}`">
    <v-list-item-content>
      <v-list-item-title v-html="client.name" />
      <v-list-item-subtitle v-text="client.title" />
    </v-list-item-content>
    <v-list-item-avatar :size="40">
      <v-img :src="client.avatar">
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
    client: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
