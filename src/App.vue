<template>
  <v-app>
    <v-main class="main">
      <grid />
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Roman Avdeev</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import grid from './components/grid'

export default {
  name: 'App',

  components: {
    grid,
  },
}
</script>

<style>
* {
  font-family: 'Gotham';
}
.main {
  background-color: #f9f9f9;
}
@font-face {
  font-family: 'Gotham';
  src: local('Gotham Pro'), local('Gotham-Pro'),
    url('~@/assets/fonts/GothamPro.ttf') format('ttf'),
    url('~@/assets/fonts/GothamPro.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}
</style>
