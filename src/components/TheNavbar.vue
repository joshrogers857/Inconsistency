<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();

const logoFont = computed(() => {
  console.log(route.query['id']?.slice(0, 2));

  switch (Number(route.query['id']?.slice(0, 2))) {
    case 1:
      return 'nabla-regular';
    case 2:
    case 3:
    case 4:
    case 5:
      return 'cairo-play-regular';
    case 6:
    case 7:
    case 8:
    case 10:
    default:
      return 'bungee-spice-regular';
  }
});
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <router-link class="navbar-brand fs-3" :class="logoFont" to="/">Inconsisten.cy</router-link>
    </div>
  </nav>
</template>
