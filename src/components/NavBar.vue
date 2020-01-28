<template>
  <nav>
    <v-navigation-drawer permanent v-model="drawer" app>
      <my-list-group :routes="routes" />
    </v-navigation-drawer>
  </nav>
</template>

<script>
import MyListGroup from "./MyListGroup";
export default {
  name: "NavBar",
  data() {
    return {
      drawer: true
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  components: { MyListGroup }
};
</script>

<style scoped></style>