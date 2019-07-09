<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-layout align-start justify-center row fill-height>
    <v-flex xs12 md4>
      <v-card>
        <v-toolbar color="grey lighten-3" class="elevation-0">
          <v-toolbar-title>Set up day goal</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text>
          <v-form>
            <v-subheader class="pl-0">Proteins in day</v-subheader>
            <v-slider
                    thumb-label="always"
                    v-model="slider"
                    step="10"
                    min="0"
                    max="1500"
                    append-icon="add"
                    prepend-icon="remove"
            ></v-slider>
            <v-subheader class="pl-0">Fat in day</v-subheader>
            <v-slider
                    thumb-label="always"
                    v-model="slider"
                    step="10"
                    min="0"
                    max="1500"
                    append-icon="add"
                    prepend-icon="remove"
            ></v-slider>
            <v-subheader class="pl-0">Carbohydrates in day</v-subheader>
            <v-slider
                    thumb-label="always"
                    v-model="slider"
                    step="10"
                    min="0"
                    max="1500"
                    append-icon="add"
                    prepend-icon="remove"
            ></v-slider>
            <v-subheader class="pl-0">Calories in day</v-subheader>
            <v-slider
                    thumb-label="always"
                    v-model="slider"
                    step="10"
                    min="0"
                    max="1500"
                    append-icon="add"
                    prepend-icon="remove"
            ></v-slider>
          </v-form>
        </v-card-text>

      </v-card>
    </v-flex>
    <v-flex ms12 md4 offset-md1>
      <v-card>
        <v-toolbar color="grey lighten-3" class="elevation-0">
          <v-toolbar-title>Set up profile</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text>
          <v-form>
            <v-text-field
                    label="Name"
                    required
            ></v-text-field>
            <v-text-field
                    label="Email"
                    required
            ></v-text-field>
            <v-text-field
                    label="Age"
                    required
            ></v-text-field>
            <v-text-field
                    label="Weight"
                    required
            ></v-text-field>
            <v-text-field
                    label="Growth"
                    required
            ></v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      items: [
        'Food 1',
        'Food 2',
        'Food 3',
        'Food 4'
      ],
      slider: 300,
      select: null,
    }),
  }
</script>

<style scoped>
</style>
