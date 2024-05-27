<script setup lang="ts">
import { RouterView } from 'vue-router';

import TheNavbar from '@/components/TheNavbar.vue';
</script>

<template>
  <TheNavbar></TheNavbar>
  <div class="container-fluid">
    <router-view></router-view>
  </div>
</template>
