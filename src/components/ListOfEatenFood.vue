<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-flex
          class="mx-auto sm12 md5"
  >

    <v-timeline  dense>

      <v-timeline-item
              v-for="n in 4"
              :key="n"
              color="pink"
              large
      >
        <template v-slot:icon>
          <v-avatar>
            <img src="http://i.pravatar.cc/64">
          </v-avatar>
        </template>

        <template>
          <v-card class="elevation-2">

            <v-card-title class="pb-0">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn outline label color="green" class="pa-0" small fab v-on="on">120</v-btn>
                </template>
                <span>Proteins</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn outline label color="red" class="pa-0" small fab v-on="on">330</v-btn>
                </template>
                <span>Fat</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn outline label color="orange" class="pa-0" small fab v-on="on">220</v-btn>
                </template>
                <span>Carbohydrates</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn outline label color="green" class="pa-0" small fab v-on="on">1200</v-btn>
                </template>
                <span>Calories</span>
              </v-tooltip>

              <v-spacer/>
              <v-btn icon>
                <v-icon>add</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>delete</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text class="pt-0">

              <v-data-table
                      :headers="headers"
                      :items="desserts"
                      class="elevation-0"

                      hide-actions
              >
                <template v-slot:items="props">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-center">{{ props.item.calories }}</td>
                  <td class="text-xs-center">{{ props.item.fat }}</td>
                  <td class="text-xs-center">{{ props.item.carbs }}</td>
                  <td class="text-xs-center">{{ props.item.protein }}</td>
                  <td class="text-xs-center">{{ props.item.weight }}</td>
                </template>
              </v-data-table>

            </v-card-text>
          </v-card>
        </template>

      </v-timeline-item>



    </v-timeline>

  </v-flex>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Name of Food',
            align: 'center',
            sortable: false,
            value: 'name',
          },
          { text: 'Protein', value: 'protein', sortable: false, align: 'center',},
          { text: 'Carbohydrates', value: 'calories', sortable: false, align: 'center',},
          { text: 'Fat', value: 'fat', sortable: false, align: 'center',},
          { text: 'Calories (kcal)', value: 'Calories', sortable: false, align: 'center',},
          { text: 'Weight', value: 'weight', sortable: false, align: 'center',},
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            weight: 400,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            weight: 400,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            weight: 400,
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
