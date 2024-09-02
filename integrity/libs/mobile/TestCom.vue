<template>
  <p>Your age is {{ age }}</p>
</template>

<script setup>
import { ref } from 'vue';

const age = ref(3);
</script>
