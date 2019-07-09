<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-toolbar class="elevation-0" color="grey lighten-5 mb-4">
      <v-tooltip bottom>
          <template v-slot:activator="{ on }">
              <v-btn outline label color="grey" class="pa-0" small fab v-on="on">120</v-btn>
          </template>
          <span>Current Proteins</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on }">
              <v-btn outline label color="grey" class="pa-0" small fab v-on="on">120</v-btn>
          </template>
          <span>Current Fat</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on }">
              <v-btn outline label color="grey" class="pa-0" small fab v-on="on">120</v-btn>
          </template>
          <span>Current Carbohydrates</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on }">
              <v-btn outline label color="grey" class="pa-0" small fab v-on="on">1200</v-btn>
          </template>
          <span>Current Calories</span>
      </v-tooltip>

      <v-spacer></v-spacer>

      <v-btn icon to="/AddEatenFood">
          <v-icon>add</v-icon>
      </v-btn>
      <v-btn icon to="/ListOfFood">
        <v-icon>list</v-icon>
      </v-btn>

      <v-btn icon to="/ListOfEatenFood">
        <v-icon>assignment</v-icon>
      </v-btn>

      <v-btn icon to="/Setting">
        <v-icon>settings</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-tooltip bottom>
          <template v-slot:activator="{ on }">
              <v-btn outline label color="green" class="pa-0" small fab v-on="on">120</v-btn>
          </template>
          <span>Goal of Proteins</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on }">
              <v-btn outline label color="green" class="pa-0" small fab v-on="on">120</v-btn>
          </template>
          <span>Goal of Fat</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on }">
              <v-btn outline label color="green" class="pa-0" small fab v-on="on">120</v-btn>
          </template>
          <span>Goal of Carbohydrates</span>
      </v-tooltip>
      <v-tooltip bottom>
          <template v-slot:activator="{ on }">
              <v-btn outline label color="green" class="pa-0" small fab v-on="on">1200</v-btn>
          </template>
          <span>Goal of Calories</span>
      </v-tooltip>
  </v-toolbar>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
