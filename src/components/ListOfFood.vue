<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-layout row>
    <v-flex xs12 sm12 md6 offset-md3>
      <v-card>
        <v-toolbar color="grey lighten-3" class="elevation-0">

          <v-toolbar-title>List of my food</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>add</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line>
          <template v-for="(item, index) in items">

            <v-divider
                    v-if="item.divider"
                    :key="index"
                    :inset="item.inset"
            ></v-divider>

            <v-list-tile
                    v-else
                    :key="item.title"
                    avatar
                    @click=""
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Oatmeal',
            subtitle: "100gr of food contains - 10gr proteins, 10gr fat, 10gr carbohydrates, 300 calories"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Buckwheat',
            subtitle: "100gr of food contains - 10gr proteins, 10gr fat, 10gr carbohydrates, 300 calories"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Rice',
            subtitle: "100gr of food contains - 10gr proteins, 10gr fat, 10gr carbohydrates, 300 calories"
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>
