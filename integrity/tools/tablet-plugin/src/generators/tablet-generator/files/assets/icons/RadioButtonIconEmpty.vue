<template>
  <svg :class="colorClass" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2013_2323)">
      <path d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM18 30C11.37 30 6 24.63 6 18C6 11.37 11.37 6 18 6C24.63 6 30 11.37 30 18C30 24.63 24.63 30 18 30Z" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_2013_2323">
        <rect width="36" height="36" fill="white"/>
      </clipPath>
    </defs>
  </svg>

</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  iconColor: {
    type: String,
    default: ''
  },
  iconSize: {
    type: Number,
    default: null
  }
})

const colorClass = computed(() => {
  switch (props.iconColor) {
    case 'secondary':
    case 'plane':
    case 'outline':
      return 'secondary'
    default:
      return `primary`
  }
})
</script>

<style lang="scss" scoped>
@import 'assets/css/main.scss';

.primary {
  color: $light-gray-40;
}

.secondary {
  color: $dark-gray;
}
</style>
