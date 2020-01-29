<template>
  <v-app>
    <nav-bar />
    <v-app-bar app color="primary" dark> </v-app-bar>
    <v-content class="mt-4 ml-4">
      <v-scroll-x-transition mode="out-in">
        <router-view
      /></v-scroll-x-transition>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: { NavBar }
};
</script>