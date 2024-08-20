<template>
  <svg v-if="heightButton === 'large'" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.8333 5.5H9.16667C7.15 5.5 5.5 7.15 5.5 9.16667V34.8333C5.5 36.85 7.15 38.5 9.16667 38.5H34.8333C36.85 38.5 38.5 36.85 38.5 34.8333V9.16667C38.5 7.15 36.85 5.5 34.8333 5.5ZM34.8333 34.8333H9.16667V9.16667H34.8333V34.8333ZM32.9817 16.5L30.3967 13.8967L18.315 25.9783L13.585 21.2667L10.9817 23.8517L18.315 31.1667L32.9817 16.5Z" fill="#333333"/>
  </svg>
  <svg v-if="heightButton === 'medium'" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_472_7795)">
      <path d="M28.5 4.5H7.5C5.85 4.5 4.5 5.85 4.5 7.5V28.5C4.5 30.15 5.85 31.5 7.5 31.5H28.5C30.15 31.5 31.5 30.15 31.5 28.5V7.5C31.5 5.85 30.15 4.5 28.5 4.5ZM28.5 28.5H7.5V7.5H28.5V28.5ZM26.985 13.5L24.87 11.37L14.985 21.255L11.115 17.4L8.985 19.515L14.985 25.5L26.985 13.5Z" fill="#333333"/>
    </g>
    <defs>
      <clipPath id="clip0_472_7795">
        <rect width="36" height="36" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  <svg v-if="heightButton === 'small'" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_472_7792)">
      <path d="M22.1667 3.5H5.83333C4.55 3.5 3.5 4.55 3.5 5.83333V22.1667C3.5 23.45 4.55 24.5 5.83333 24.5H22.1667C23.45 24.5 24.5 23.45 24.5 22.1667V5.83333C24.5 4.55 23.45 3.5 22.1667 3.5ZM22.1667 22.1667H5.83333V5.83333H22.1667V22.1667ZM20.9883 10.5L19.3433 8.84333L11.655 16.5317L8.645 13.5333L6.98833 15.1783L11.655 19.8333L20.9883 10.5Z" fill="#333333"/>
    </g>
    <defs>
      <clipPath id="clip0_472_7792">
        <rect width="28" height="28" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  <svg v-if="heightButton === 'extra-small'" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_472_7789)">
      <path d="M22.1667 3.5H5.83333C4.55 3.5 3.5 4.55 3.5 5.83333V22.1667C3.5 23.45 4.55 24.5 5.83333 24.5H22.1667C23.45 24.5 24.5 23.45 24.5 22.1667V5.83333C24.5 4.55 23.45 3.5 22.1667 3.5ZM22.1667 22.1667H5.83333V5.83333H22.1667V22.1667ZM20.9883 10.5L19.3433 8.84333L11.655 16.5317L8.645 13.5333L6.98833 15.1783L11.655 19.8333L20.9883 10.5Z" fill="#333333"/>
    </g>
    <defs>
      <clipPath id="clip0_472_7789">
        <rect width="28" height="28" fill="white"/>
      </clipPath>
    </defs>
  </svg>

</template>

<script setup>
const props = defineProps({
  /** Высота кнопки*/
  heightButton: {type: String, default: ''}
})
</script>
