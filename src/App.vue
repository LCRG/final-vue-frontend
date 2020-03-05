<template>
  <v-app class="ma-0 pa-0">
    <v-app-bar
      app
      color="primary"
      dark
    >
    Bachelor of Science | Digital Media | Web & App Development
    </v-app-bar>

    <v-content>
      <ProgramView/>
    </v-content>
  </v-app>
</template>

<script>
import ProgramView from './components/ProgramView';

export default {
  name: 'App',

  components: {
    ProgramView,
  },
};
</script>
