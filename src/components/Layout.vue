<template>
  <v-app>
    <v-nav-bar />
    <v-app-bar app color="primary" dark />
    <v-content class="mt-4 ml-4">
      <v-scroll-x-transition mode="out-in">
        <router-view />
      </v-scroll-x-transition>
    </v-content>
  </v-app>
</template>

<script>
import VNavBar from "./VNavBar";

export default {
  name: "Layout",
  components: { VNavBar }
};
</script>

<style scoped></style>
