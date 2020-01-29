<template>
  <nav>
    <v-navigation-drawer permanent v-model="drawer" app>
      <!-- 传递当前路由表 -->
      <v-nested-list :propsRoutes="$router.options.routes" />
    </v-navigation-drawer>
  </nav>
</template>

<script>
import VNestedList from "./VNestedList";
export default {
  name: "VNavBar",
  data() {
    return {
      drawer: true
    };
  },
  components: { VNestedList }
};
</script>

<style scoped></style>
