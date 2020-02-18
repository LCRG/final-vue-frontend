<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
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

  data: () => ({
    //
  }),
};
</script>
