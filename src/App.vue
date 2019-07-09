<template>
  <v-app class="mt-0">
    <v-container fluid>
      <v-layout align-start justify-center row fill-height>
        <v-flex>
          <Menu/>

          <HelloWorld msg="Welcome to Your Vue.js App"/>

        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Menu from './components/Menu.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,
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
