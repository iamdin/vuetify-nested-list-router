<template>
  <nav>
    <v-navigation-drawer permanent v-model="drawer" app>
      <v-nested-list :propsRoutes="routes" />
    </v-navigation-drawer>
  </nav>
</template>

<script>
import VNestedList from "./VNestedList";
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
  components: { VNestedList }
};
</script>

<style scoped></style>
