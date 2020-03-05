<template>
  <v-container fluid class="grey lighten-4 ma-4">
    <v-row dense >
      <v-col>
        <v-row class="grey lighten-4">
          <div class="labels"><p id="aas" class="ma-0 pa-4 title">AAS Degree | Pre-acceptance into Bachelors</p></div>
        </v-row>
      </v-col>
      <v-col>
        <v-row class="grey lighten-1">
          <div class="labels grey lighten-1"><p class="ma-0 pa-4 title">Bachelor's Semesters 5-8</p></div>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row class="grey lighten-4">
          <CourseCard courseCode="DGM 2120"></CourseCard>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <CourseCard courseCode="DGM 2740"></CourseCard>
          <CourseCard courseCode="DGM 2780"></CourseCard>
          <CourseCard courseCode="DGM 3750"></CourseCard>
          <CourseCard courseCode="DGM 3740"></CourseCard>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row class="grey lighten-4">
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <CourseCard courseCode="DGM 2250"></CourseCard>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <CourseCard courseCode="DGM 221R"></CourseCard>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row class="grey lighten-4">
          <CourseCard courseCode="DGM 1220"></CourseCard>
          <CourseCard courseCode="DGM 1230"></CourseCard>
          <CourseCard courseCode="DGM 2240"></CourseCard>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row class="grey lighten-4">
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <CourseCard courseCode="DGM 1240"></CourseCard>
          <CourseCard courseCode="DGM 2341"></CourseCard>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row class="grey lighten-4">
          <CourseCard courseCode="DGM 1600"></CourseCard>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <CourseCard courseCode="DGM 2760"></CourseCard>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <CourseCard courseCode="DGM 3760"></CourseCard>
          <CourseCard courseCode="DGM 3780"></CourseCard>
          <CourseCard courseCode="DGM 3790"></CourseCard>
          <CourseCard courseCode="DGM 4790"></CourseCard>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row class="grey lighten-4">
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <v-spacer class="ma-2 pa-2"></v-spacer>
          <CourseCard courseCode="DGM 4310"></CourseCard>
          <CourseCard courseCode="DGM 4410"></CourseCard>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CourseCard from './CourseCard'

export default {
  name: 'ProgramView',
  components: {
    CourseCard
  }
}
</script>

<style scoped>


.labels {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  width: 100%;
}

</style>
