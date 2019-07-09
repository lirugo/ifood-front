<template>
  <v-app class="mt-0">
    <v-container fluid>
      <v-layout align-start justify-center row fill-height>
        <v-flex>
          <Menu/>

          <transition
                  name="fade"
                  mode="out-in"
          >
            <router-view></router-view>
          </transition>

        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import Menu from './components/Menu.vue'

  export default {
    name: 'app',
    components: {
      Menu
    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
