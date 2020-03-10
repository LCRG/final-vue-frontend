<template>
  <v-row justify="center">
    <!-- Apollo watched Graphql query -->
    <ApolloQuery :query="require('../graphql/AllCompetencies.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">Error: Is your GraphQL server running?</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <v-dialog v-model="dialog" persistent max-width="1280">
            <v-card>
              <v-card-title class="headline"
                >DGM 1600 Competencies</v-card-title
              >
              <!-- <v-card-text>{{ data.Competencies.name }}</v-card-text> -->
              <v-list>
                <v-list-item v-for="(item, i) in data.Competencies.slice(0, 100)" :key="i">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-4" text @click="dialog = false"
                  >Done</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </v-row>
</template>

<script>
export default {
  name: "CompetencyViewModal",
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    open() {
      this.dialog = true
    }
  }
}
</script>
