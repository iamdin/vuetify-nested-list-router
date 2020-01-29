<template>
  <v-list>
    <div v-for="route in routes" :key="route.path">
      <!-- group绑定当前路由实现List的自动展开     -->
      <v-list-group
        :group="route.path"
        v-if="route.children"
        :class="isRootRoute(route) ? '' : 'ml-5'"
        eager
      >
        <template #activator>
          <v-list-item-icon v-if="route.meta.icon">
            <v-icon>{{ route.meta.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ route.meta.title }}</v-list-item-title>
        </template>

        <v-nested-list :propsRoutes="route.children"></v-nested-list>
      </v-list-group>
      <v-list-item
        v-else
        :to="route.path"
        :class="isRootRoute(route) ? '' : 'ml-5'"
        color="success"
      >
        <v-list-item-icon v-if="route.meta.icon">
          <v-icon>{{ route.meta.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ route.meta.title }}</v-list-item-title>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
export default {
  name: "VNestedList",
  props: {
    propsRoutes: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    routes() {
      return this.propsRoutes.filter(item => !item.hideInMenu);
    }
  },
  methods: {
    isRootRoute(route) {
      return this.$router.options.routes.includes(route);
    }
  },
  created() {}
};
</script>

<style scoped></style>
