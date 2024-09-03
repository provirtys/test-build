<template>
  <svg
    :class="colorClass"
    :width="props.iconSize"
    :height="props.iconSize"
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2001_6362)">
      <path
        d="M19.644 15.1048H4.80469V12.8953H19.644L12.7695 6.02079L14.3333 4.46674L23.8666 14L14.3333 23.5286L12.7695 21.9792L19.644 15.1048Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_2001_6362">
        <rect
          width="28"
          height="28"
          fill="white"
          transform="translate(0.333008)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  iconColor: {
    type: String,
    default: 'primary',
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
