<template>
  <v-list>
    <div v-for="route in routes" :key="route.path">
      <v-list-group
        v-if="route.children"
        :class="isRootRoute(route) ? '' : 'ml-5'"
      >
        <template #activator>
          <v-list-item-icon>
            <v-icon>{{ route.meta.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ route.meta.title }}</v-list-item-title>
        </template>

        <my-list-group :routes="route.children"></my-list-group>
      </v-list-group>
      <v-list-item
        v-else
        :to="route.path"
        :class="isRootRoute(route) ? '' : 'ml-5'"
        color="success"
      >
        <v-list-item-icon>
          <v-icon>{{ route.meta.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ route.meta.title }}</v-list-item-title>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
export default {
  name: "MyListGroup",
  props: {
    routes: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    }
  },
  data: () => ({}),
  methods: {
    isRootRoute(route) {
      return this.$router.options.routes.includes(route);
    }
  }
};
</script>

<style scoped></style>
