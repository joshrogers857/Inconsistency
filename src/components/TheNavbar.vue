<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useLogoFont } from '@/composables/useLogoFont';

const { getLogoFont } = useLogoFont();
const logoFont = ref(getLogoFont());
</script>

<template>
  <nav class="navbar mb-5">
    <div class="container-fluid">
      <router-link class="navbar-brand fs-3" :class="logoFont" to="/">
        Inconsisten.cy
      </router-link>
    </div>
  </nav>
</template>
