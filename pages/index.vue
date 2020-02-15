<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title v-text="title" />
        <v-card-subtitle v-text="subtitle" />
        <v-divider />
        <v-list flat disabled three-line>
          <v-list-item v-for="(row, r) in rows" :key="r">
            <v-list-item-content>
              <v-list-item-title v-text="row.title" />
              <v-list-item-subtitle
                v-for="(listItem, i) in row.listItems"
                :key="i"
              >
                {{ listItem.item }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
        </v-list>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/users">{{ buttonText }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: 'users',
  data: () => ({
    title: 'Spherical Analytics - Skills Assessment',
    subtitle:
      'Create an application that provides a list of clients and details.',
    buttonText: 'Continue',
    rows: [
      {
        title: 'Required Features',
        listItems: [
          {
            item:
              'API: Client data is stored in clients.json (attached) and will be loaded via rest.'
          },
          {
            item:
              'List: Each client list item will display a small avatar, the client’s name, and job title. When user clicks on an item, it will display Client Details.'
          },
          {
            item:
              'Search: Filter any client property, not only those showed in the clients list. List will be updated as the search terms are entered.'
          },
          {
            item:
              'Client Details: Full size avatar (128x128px) and all other client information.'
          },
          {
            item:
              'Project: Must provide linting, tests, and will execute all required components by executing “npm run dev” at which point the app will be accessible at http://localhost:3000.'
          }
        ]
      },
      {
        title: 'Evaluation Criteria',
        listItems: [
          {
            item: 'State management ((im)mutability)'
          },
          {
            item: 'Project organization (clear and consistent)'
          },
          {
            item: 'Test coverage (which code did you cover? why?)'
          },
          {
            item: 'Idiomatic style (conforms to a known style guide)'
          },
          {
            item: 'Component communication (event based / synchronous / etc)'
          }
        ]
      },
      {
        title: 'Expected Tech',
        listItems: [
          {
            item: 'ES6 (with Babel if appropriate)'
          },
          {
            item: 'Vue.js'
          },
          {
            item: 'vuex/flux/state management'
          },
          {
            item: 'npm or yarn'
          }
        ]
      }
    ]
  })
}
</script>
