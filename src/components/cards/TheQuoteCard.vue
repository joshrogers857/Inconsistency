<script setup lang="ts">
import { ref } from 'vue';
import BaseCard from './BaseCard.vue';

const cardHeader = ref("A Quote...");
</script>

<template>
  <BaseCard
    :header="cardHeader"
  >
    <blockquote class="blockquote mb-0">
      <p>"A well-known quote, contained in a blockquote element."</p>
      <footer class="blockquote-footer">Someone famous</footer>
    </blockquote>
  </BaseCard>
</template>
