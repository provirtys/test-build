<template>
  <svg :class="colorClass" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2013_600)">
      <path d="M11.541 22.5H9.29102V15.75H7.04102V13.5H11.541V22.5ZM21.291 20.25H16.791V18.75H19.791C20.616 18.75 21.291 18.075 21.291 17.25V15C21.291 14.175 20.616 13.5 19.791 13.5H14.541V15.75H19.041V17.25H16.041C15.216 17.25 14.541 17.925 14.541 18.75V22.5H21.291V20.25ZM30.291 21V15C30.291 14.175 29.616 13.5 28.791 13.5H23.541V15.75H28.041V17.25H25.041V18.75H28.041V20.25H23.541V22.5H28.791C29.616 22.5 30.291 21.825 30.291 21Z" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_2013_600">
        <rect width="36" height="36" fill="white" transform="translate(0.666016)"/>
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

<style lang="scss">
@import '../../css/main.scss';

.primary {
  color: $light-gray-40;
}

.secondary {
  color: $dark-gray;
}
</style>
