<template>
  <svg
    :class="colorClass"
    :width="props.iconSize"
    :height="props.iconSize"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.39264 21L0 12.4678L2.09816 10.3347L8.39264 16.7339L21.9018 3L24 5.13306L8.39264 21Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  iconColor: {
    type: String,
    default: '',
  },
  iconSize: {
    type: Number,
    default: null,
  },
});

const colorClass = computed(() => {
  switch (props.iconColor) {
    case 'primary':
    case 'secondary':
    case 'light-gray-55':
      return props.iconColor;
    default:
      return `primary`;
  }
});
</script>

<style lang="scss">
.primary {
  color: $primary;
}

.secondary {
  color: $secondary;
}

.light-gray-55 {
  color: $light-gray-55;
}
</style>
