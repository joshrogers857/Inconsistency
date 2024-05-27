<script setup lang="ts">
defineProps<{
  header?: string,
}>();
</script>

<template>
  <div class="card w-100 h-100">
    <div v-if="header" class="card-header">
      {{ header }}
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>
