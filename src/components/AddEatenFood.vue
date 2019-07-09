<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="grey lighten-3" class="elevation-0">
          <v-toolbar-title>Add Eaten Food</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-text>
          <v-form
                  lazy-validation
          >
            <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Select food"
                    required
            ></v-select>

            <v-subheader class="pl-0">Weight in gram</v-subheader>
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
      slider: 100,
      select: null,
    }),
  }
</script>

<style scoped>
</style>
