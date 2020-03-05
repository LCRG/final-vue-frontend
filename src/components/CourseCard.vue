<template>
  <!-- Apollo watched Graphql query -->
  <ApolloQuery
    :query="require('../graphql/CourseByCode.gql')"
    :variables="{ courseCode }"
  >
    <template slot-scope="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occured</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <v-card elevation="2" class="ma-2" outlined width="200">
          <v-card-title>{{ data.courseByCourseCode.courseCode }}</v-card-title>
          <v-card-subtitle class="pb-0">{{ data.courseByCourseCode.name }}</v-card-subtitle>
          <v-card-text class="ma-0 pl-4 overline">{{ data.courseByCourseCode.termsOffered }}
          </v-card-text>
           <v-card-actions class="ma-0 pa-0">
            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
            <v-spacer><v-btn icon>
                <v-icon>mdi-playlist-check</v-icon>
              </v-btn></v-spacer>
            <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-teach</v-icon>
              </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{ data.courseByCourseCode.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  name: 'CourseCard',
  data: () => ({
    show: false
  }),
  props: {
    courseCode: String
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return 'Something'
    }
  }
}
</script>

<style scoped>

</style>
