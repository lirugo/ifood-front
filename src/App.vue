<template>
  <v-app class="mt-0">
    <v-container fluid>
      <v-layout align-start justify-center row fill-height>
        <v-flex>
          <Menu/>

          <ListOfEat/>

        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import ListOfEat from './components/ListOfEat.vue'
  import Menu from './components/Menu.vue'

  export default {
    name: 'app',
    components: {
      ListOfEat,
      Menu
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
