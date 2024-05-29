<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseCard from './BaseCard.vue';
import { useQuote } from '@/composables/useQuote';

const { getQuote } = useQuote();

const DEFAULT_AUTHOR = ref('Unknown');

const cardHeader = ref('A Quote...');
const quote = ref(getQuote());

const body = computed(() => `"${quote.value.body}"`);
const author = computed(() => quote.value.author ?? DEFAULT_AUTHOR.value);
</script>

<template>
  <BaseCard
    :header="cardHeader"
  >
    <blockquote class="blockquote mb-0">
      <p>{{ body }}</p>
      <footer class="blockquote-footer">
        {{ author }}
      </footer>
    </blockquote>
  </BaseCard>
</template>
